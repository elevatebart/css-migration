import { createVueMetamorphCli } from "vue-metamorph";
import { builders as b } from "ast-types";
import { CSS_VARS_TRANSFORMS_MAP, CSS_IN_JS_VARS_TRANSFORMS_MAP } from "./replacements.mjs";

const cwd = process.cwd()



/**
 * @type {import('vue-metamorph').CodemodPlugin}
 */
const updateCSSVariables = {
  type: "codemod",
  name: "replace bs-variables with ks colors",

  transform({
    scriptASTs,
    sfcAST,
    styleASTs,
    filename,
    utils: { traverseScriptAST, traverseTemplateAST },
  }) {
    let transformsPerformed = 0;

    if (scriptASTs) {
      for (const scriptAST of scriptASTs) {
        traverseScriptAST(scriptAST, {
          visitTemplateElement(path) {
            for (const {
              selector,
              replacement,
            } of CSS_IN_JS_VARS_TRANSFORMS_MAP) {
              if (selector.test(path.node.value.raw)) {
                const updatedValue = path.node.value.raw.replace(
                  selector,
                  replacement
                );
                console.log("updatedValue", updatedValue);

                path.replace(
                  b.templateElement(
                    {
                      raw: updatedValue,
                      cooked: updatedValue,
                    },
                    path.node.tail
                  )
                );
                transformsPerformed++;
              }
              selector.lastIndex = 0;
            }
            return this.traverse(path);
          },
        });
      }
    }

    if (styleASTs) {
      for (const styleAST of styleASTs) {
        styleAST.walkDecls((node) => {
          for (const { selector, props } of CSS_VARS_TRANSFORMS_MAP) {
            const selectorRegExp = new RegExp(`var\\(${selector}\\)`);
            if (selectorRegExp.test(node.value)) {
              if (props[node.prop]) {
                const oldValue = node.value.toString();
                node.value = oldValue.replace(
                  selectorRegExp,
                  `var(${props[node.prop]})`
                );
                transformsPerformed++;
              }
            }
          }
        });
      }
    }

    if (transformsPerformed) {
      console.log(filename. replace(cwd, ''), `Performed ${transformsPerformed} transforms`);
    }

    return transformsPerformed;
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
  plugins: [updateCSSVariables],
});

run();

// call abort() to gracefully stop the runner
// process.on('SIGINT', abort);
