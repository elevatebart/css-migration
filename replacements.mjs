export const CSS_VARS_TRANSFORMS_MAP = [
    // bootstrap
    {
      selector: "--bs-white",
      props: {
        "background-color": "--ks-background-card",
        background: "--ks-background-card",
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
      selector: "--bs-code-color",
      props: {
        color: "--ks-content-id"
      }
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
        // editor's file explorer, slider's, hover state...
        "background-color": "--ks-border-active"
      },
    },
    {
      selector: "--bs-tertiary-color",
      props: {
          color: "--ks-content-tertiary",
      }
    },
    {
      selector: "--bs-border-color",
      props: {
        border: "--ks-border-primary",
        "border-color": "--ks-border-primary",
        "border-bottom": "--ks-border-primary",
        "border-right": "--ks-border-primary",
      },
    },
    {
      selector: "--bs-card-color",
      props: {
          color: "--ks-content-primary"
      }
    },
    {
      selector: "--bs-border-secondary-color",
      props: {
          border:"--ks-border-secondary",
          "border-color": "--ks-border-secondary",
          "border-bottom": "--ks-border-secondary",
      }
    },
    {
      selector: "--bs-warning",
      props: {
          color: "--ks-content-warning",
      }
    },
  
    // element plus
    {
      selector: "--el-bg-color",
      props: {
        "background-color": "--ks-background-button-secondary-hover",
        background: "--ks-background-button-secondary-hover"
      }
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
      selector: "--el-color-primary",
      props: {
        "border-color": "--ks-border-active",
        border: "--ks-border-active",
        "box-shadow": "--ks-border-active",
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
        "border-bottom": "--ks-border-primary",
        "box-shadow": "--ks-border-primary",
      },
    },
    {
      selector: "--el-border",
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
        background: "--ks-background-body"
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
        "background-color": "--ks-background-button-secondary",
        border: "--ks-background-button-secondary",
      },
    },
    {
      selector: "--el-text-color-disabled",
      props: {
          color: "--ks-content-inactive",
      }
    },
    {
      selector: "--el-color-warning",
      props: {
          color: "--ks-content-warning",
      }
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
    {
      selector: "--input-bg",
      props: {
          "background-color": "--ks-background-input",
          background: "--ks-background-input"
      }
    },
    {
      selector: "--log-content-error",
      props: {
          "color": "--ks-log-content-error"
      }
    },
    {
      selector: "--log-background-error",
      props: {
          "background-color": "--ks-log-background-error",
          "border-top": "--ks-log-background-error",
      }
    },
    {
      selector: "--log-border-error",
      props: {
          "border": "--ks-log-border-error",
          "border-color": "--ks-log-border-error",
      }
    },
    {
        selector: "--background-color-failed",
        props: {
            background: "--ks-background-error",
            "background-color": "--ks-background-error",
        }
    },
    {
        selector: "--content-color-failed",
        props: {
            color: "--ks-content-error",
        }
    },
    {
        selector: "--background-information",
        props: {
            background: "--ks-background-info",
            "background-color": "--ks-background-info",
        }
    },
    {
        selector: "--content-information",
        props: {
            color: "--ks-content-info",
        }
    },
    {
        selector: "--border-information",
        props: {
            border: "--ks-border-info",
        }
    }

    // post fixes
    ,
    {
        selector: "--ks-content-information",
        props: {
            color: "--ks-content-info"
        }
    }
    ,
    {
        selector: "--ks-border-information",
        props: {
            border: "--ks-border-info",
            "border-color": "--ks-border-info"
        }
    }
    ,
    {
        selector: "--ks-background-information",
        props: {
            background: "--ks-background-info",
            "background-color": "--ks-background-info"
        }
    }
    ,
    {
        selector: "--ks-content-failed",
        props: {
            color: "--ks-content-error"
        }
    }
    ,
    {
        selector: "--ks-border-failed",
        props: {
            border: "--ks-border-error",
            "border-color": "--ks-border-error"
        }
    }
    ,
    {
        selector: "--ks-background-failed",
        props: {
            background: "--ks-background-error",
            "background-color": "--ks-background-error"
        }
    }
  ];
  
  export const CSS_IN_JS_VARS_TRANSFORMS_MAP = [
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
      replacement: "var(--ks-log-content-",
    },
  ];