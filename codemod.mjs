import { createVueMetamorphCli } from "vue-metamorph";
import { builders as b } from "ast-types";

const cwd = process.cwd()

const CSS_VARS_TRANSFORMS_MAP = [
  {
    selector: "--bs-white",
    props: {
      "background-color": "--ks-background-card",
      background: "--ks-background-car",
    },
  },
  {
    selector: "--bs-primary",
    props: {
      color: "--ks-content-link",
      "background-color": "--ks-background-button-primary",
      background: "--ks-background-button-primary",
    },
  },
  {
    selector: "--bs-purple",
    props: {
      color: "--ks-content-link",
      "background-color": "--ks-background-button-primary",
      background: "--ks-background-button-primary",
    },
  },
  {
    selector: "--bs-body-color",
    props: {
      color: "--ks-content-primary",
    },
  },
  {
    selector: "--el-text-primary",
    props: {
      color: "--ks-content-primary",
    },
  },
  {
    selector: "--el-text-color-regular",
    props: {
      color: "--ks-content-primary",
    },
  },
  {
    selector: "--bs-body-bg",
    props: {
      "background-color": "--ks-background-body",
      background: "--ks-background-body",
    },
  },
  {
    selector: "--bs-card-bg",
    props: {
      "background-color": "--ks-background-card",
      background: "--ks-background-card",
    },
  },
  {
    selector: "--bs-secondary",
    props: {
      color: "--ks-content-secondary",
    },
  },
  {
    selector: "--bs-border-color",
    props: {
      "border-color": "--ks-border-primary",
      border: "--ks-border-primary",
    },
  },

  // element plus
  {
    selector: "--el-color-primary",
    props: {
      "border-color": "--ks-border-active",
      border: "--ks-border-active",
      color: "--ks-content-link",
    },
  },
  {
    selector: "--el-border-color",
    props: {
      border: "--ks-border-primary",
      "border-color": "--ks-border-primary",
      "border-right": "--ks-border-primary",
      "border-left": "--ks-border-primary",
    },
  },
  {
    selector: "--el-color-text-primary",
    props: {
      color: "--ks-content-link",
    },
  },
  {
    selector: "--el-text-color-primary",
    props: {
      color: "--ks-content-link",
    },
  },
  {
    selector: "--el-text-color-secondary",
    props: {
      color: "--ks-content-link",
    },
  },
  {
    // this keeps the blue aspect of alert-info
    selector: "--el-color-alert-info",
    props: {
      color: "--ks-content-information",
    },
  },
  {
    selector: "--el-button-bg-color",
    props: {
      background: "--ks-background-button-secondary",
      border: "--ks-background-button-secondary",
    },
  },

  // previous ks colors
  {
    selector: "--content-alert",
    props: {
      color: "--ks-content-alert",
    },
  },
  {
    selector: "--card-bg",
    props: {
      "background-color": "--ks-background-card",
      background: "--ks-background-card",
    },
  },
];

const CSS_IN_JS_VARS_TRANSFORMS_MAP = [
  {
    selector: /var\(--content-color-/,
    replacement: "var(--ks-content-",
  },
  {
    selector: /var\(--border-color-/,
    replacement: "var(--ks-border-",
  },
  {
    selector: /var\(--background-color-/,
    replacement: "var(--ks-background-",
  },
  {
    selector: /var\(--log-content-/,
    replacement: "var(--ks-content-",
  },
];

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