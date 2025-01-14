// takes a vue-router routes file and transforms each route into an async route
import { createVueMetamorphCli } from "vue-metamorph";
import { builders as b } from "ast-types";

const cwd = process.cwd()

/**
 * @type {import('vue-metamorph').CodemodPlugin}
 */
const updateRoutes = {
  type: "codemod",
  name: "update vue-router routes to be async",

  transform({
    scriptASTs,
    sfcAST,
    filename,
    utils: { traverseScriptAST },
  }) {

    let transformsPerformed = 0;
    const syncImports = {}
    // first make a map of all the imports that are not async
    traverseScriptAST(scriptASTs[0], {
      visitImportDeclaration(path) {
        const importPath = path.node.source.value
        for(const specifier of path.node.specifiers) {
            if(specifier.type === 'ImportDefaultSpecifier') {
                syncImports[specifier.local.name] = {path: importPath, name: 'default'}
            } else if(specifier.type === 'ImportSpecifier') {
                syncImports[specifier.local.name] = {path: importPath, name: specifier.imported.identifierName}
            }
        }
        return this.traverse(path)
      },
    })

    const usedImports = new Set()

    // second, look at the export default and 
    // if it's an array, for each element change the value of component to be a call to defineAsyncComponent
    traverseScriptAST(scriptASTs[0], {
      visitArrayExpression(path) {
        traverseScriptAST(path, {
            visitObjectExpression(path) {
                path.node.properties.forEach(property => {
                    if(property.key.name === 'component' && property.value.type === 'Identifier') {
                        const {path: importPath, name: componentName} = syncImports[property.value.name]
                        
                        if(componentName === 'default') {
                            property.value = b.arrowFunctionExpression([], b.callExpression(b.identifier('import'), [b.stringLiteral(importPath)]))
                        } else {
                            property.value = b.objectExpression(b.arrowFunctionExpression([], b.callExpression(b.identifier('import'), [b.stringLiteral(importPath)]), b.identifier(componentName)))
                        }
                        usedImports.add(importPath)
                        transformsPerformed++
                    }
                })
                return this.traverse(path)
            }
        })
        return this.traverse(path)
      }
    })

    // then remove the imports 
    traverseScriptAST(scriptASTs[0], {
        visitImportDeclaration(path) {
            if( usedImports.has(path.node.source.value) ) {
                path.prune()
                transformsPerformed++
            }
            return this.traverse(path)
        }
    })

    return transformsPerformed
  },
};

const { run, abort } = createVueMetamorphCli({
    silent: true, // suppress vue-metamorph's default output by setting silent:true
  
    onProgress({ filesProcessed, done }) {
      if (done) {
        console.log(`All ${filesProcessed} files processed`);
      }
      // called every time a file was transformed
      // also called when vue-metamorph finished processing all files (with done:true)
      // also called when vue-metamorph was aborted via the `abort()` function (with aborted:true)
    },
  
    // register your CodemodPlugins and/or ManualMigrationPlugins here
    plugins: [updateRoutes],
  });

run()