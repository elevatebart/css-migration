### In CSS code


#### Bootstrap

- When we find `var(--bs-white)`:
  - if the prop is `background-color` replace it with `--ks-background-card`
  - if the prop is `background` replace it with `--ks-background-card`
- When we find `var(--bs-primary)`:
  - if the prop is `color` replace it with `--ks-content-link`
  - if the prop is `background-color` replace it with `--ks-background-button-primary`
  - if the prop is `background` replace it with `--ks-background-button-primary`
- When we find `var(--bs-purple)`:
  - if the prop is `color` replace it with `--ks-content-link`
  - if the prop is `background-color` replace it with `--ks-background-button-primary`
  - if the prop is `background` replace it with `--ks-background-button-primary`
- When we find `var(--bs-body-color)`:
  - if the prop is `color` replace it with `--ks-content-primary`
- When we find `var(--bs-code-color)`:
  - if the prop is `color` replace it with `--ks-content-id`
- When we find `var(--bs-body-bg)`:
  - if the prop is `background-color` replace it with `--ks-background-body`
  - if the prop is `background` replace it with `--ks-background-body`
- When we find `var(--bs-card-bg)`:
  - if the prop is `background-color` replace it with `--ks-background-card`
  - if the prop is `background` replace it with `--ks-background-card`
- When we find `var(--bs-secondary)`:
  - if the prop is `color` replace it with `--ks-content-secondary`
  - if the prop is `background-color` replace it with `--ks-border-active`
- When we find `var(--bs-tertiary-color)`:
  - if the prop is `color` replace it with `--ks-content-tertiary`
- When we find `var(--bs-border-color)`:
  - if the prop is `border` replace it with `--ks-border-primary`
  - if the prop is `border-color` replace it with `--ks-border-primary`
  - if the prop is `border-bottom` replace it with `--ks-border-primary`
  - if the prop is `border-right` replace it with `--ks-border-primary`
- When we find `var(--bs-card-color)`:
  - if the prop is `color` replace it with `--ks-content-primary`
- When we find `var(--bs-border-secondary-color)`:
  - if the prop is `border` replace it with `--ks-border-secondary`
  - if the prop is `border-color` replace it with `--ks-border-secondary`
  - if the prop is `border-bottom` replace it with `--ks-border-secondary`
- When we find `var(--bs-warning)`:
  - if the prop is `color` replace it with `--ks-content-warning`


#### Element Plus

- When we find `var(--el-bg-color)`:
  - if the prop is `background-color` replace it with `--ks-background-button-secondary-hover`
  - if the prop is `background` replace it with `--ks-background-button-secondary-hover`
- When we find `var(--el-text-primary)`:
  - if the prop is `color` replace it with `--ks-content-primary`
- When we find `var(--el-text-color-regular)`:
  - if the prop is `color` replace it with `--ks-content-primary`
- When we find `var(--el-color-primary)`:
  - if the prop is `border-color` replace it with `--ks-border-active`
  - if the prop is `border` replace it with `--ks-border-active`
  - if the prop is `box-shadow` replace it with `--ks-border-active`
  - if the prop is `color` replace it with `--ks-content-link`
- When we find `var(--el-border-color)`:
  - if the prop is `border` replace it with `--ks-border-primary`
  - if the prop is `border-color` replace it with `--ks-border-primary`
  - if the prop is `border-right` replace it with `--ks-border-primary`
  - if the prop is `border-left` replace it with `--ks-border-primary`
  - if the prop is `border-bottom` replace it with `--ks-border-primary`
  - if the prop is `box-shadow` replace it with `--ks-border-primary`
- When we find `var(--el-border)`:
  - if the prop is `border` replace it with `--ks-border-primary`
  - if the prop is `border-color` replace it with `--ks-border-primary`
  - if the prop is `border-right` replace it with `--ks-border-primary`
  - if the prop is `border-left` replace it with `--ks-border-primary`
- When we find `var(--el-color-text-primary)`:
  - if the prop is `color` replace it with `--ks-content-link`
- When we find `var(--el-text-color-primary)`:
  - if the prop is `color` replace it with `--ks-content-link`
  - if the prop is `background` replace it with `--ks-background-body`
- When we find `var(--el-text-color-secondary)`:
  - if the prop is `color` replace it with `--ks-content-link`
- When we find `var(--el-color-alert-info)`:
  - if the prop is `color` replace it with `--ks-content-information`
- When we find `var(--el-button-bg-color)`:
  - if the prop is `background` replace it with `--ks-background-button-secondary`
  - if the prop is `background-color` replace it with `--ks-background-button-secondary`
  - if the prop is `border` replace it with `--ks-background-button-secondary`
- When we find `var(--el-text-color-disabled)`:
  - if the prop is `color` replace it with `--ks-content-inactive`
- When we find `var(--el-color-warning)`:
  - if the prop is `color` replace it with `--ks-content-warning`


#### Kestra

- When we find `var(--content-alert)`:
  - if the prop is `color` replace it with `--ks-content-alert`
- When we find `var(--card-bg)`:
  - if the prop is `background-color` replace it with `--ks-background-card`
  - if the prop is `background` replace it with `--ks-background-card`
- When we find `var(--input-bg)`:
  - if the prop is `background-color` replace it with `--ks-background-input`
  - if the prop is `background` replace it with `--ks-background-input`
- When we find `var(--log-content-error)`:
  - if the prop is `color` replace it with `--ks-log-content-error`
- When we find `var(--log-background-error)`:
  - if the prop is `background-color` replace it with `--ks-log-background-error`
  - if the prop is `border-top` replace it with `--ks-log-background-error`
- When we find `var(--log-border-error)`:
  - if the prop is `border` replace it with `--ks-log-border-error`
  - if the prop is `border-color` replace it with `--ks-log-border-error`

### In JS code
- When we find `var(--content-color-` in a string interpolation, we replace it with `var(--ks-content-`.
- When we find `var(--border-color-` in a string interpolation, we replace it with `var(--ks-border-`.
- When we find `var(--background-color-` in a string interpolation, we replace it with `var(--ks-background-`.
- When we find `var(--log-content-` in a string interpolation, we replace it with `var(--ks-log-content-`.