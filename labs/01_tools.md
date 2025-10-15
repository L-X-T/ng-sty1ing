# 01 Styling Tools

<!-- TOC -->

- [Angular ESLint](#angular-eslint)
- [Prettier](#prettier)
  - [Adjust rules](#adjust-rules)
  - [Run Prettier](#run-prettier)
  - [Configure Prettier to be used as an ESLint plugin](#configure-prettier-to-be-used-as-an-eslint-plugin)
- [Stylelint](#stylelint)
  - [Run Stylelint](#run-stylelint)
  <!-- TOC -->

This lab will get you started with some important **CSS Tools**.

You don't need to do the first 3 labs (ESLint and Pretter), because they're already included in your starter kit. However, this lab is useful for your own **Angular projects**.

For the workshop, please skip to the final **Stylelint** lab!

## Angular ESLint

To add **Angular ESLint** to your own Angular app, simply run:

```shell
ng add @angular-eslint/schematics
```

Note, that since v17 of **Angular ESLint** the plugin `@angular-eslint/template/accessibility` is included per default.
Now, add the `eslint.config` from this workspace or create your custom one.

If you want, you can adjust the configs. For more information, see the latest [Angular ESLint](https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin-template) rules on GitHub.

## Prettier

To add **Prettier** run

```shell
npm i -D prettier
```

```shell
yarn add -D prettier
```

Now add the `.prettierrc.json` and the `.prettierignore` from this workspace or create your own.

### Adjust rules

If you want, you can adjust the configs. See [Prettier Configuration File](https://prettier.io/docs/en/configuration.html).

I personally like to add this additional rule:

```json
{
  "bracketSameLine": true
}
```

So you end up with something like this (my recommended config):

```json
{
  "bracketSameLine": true,
  "printWidth": 120,
  "singleQuote": true
}
```

Find out here what it does: [bracketSameLine](https://prettier.io/docs/en/options.html#bracketsameline).

### Run Prettier

To manually execute prettier you can do:

```shell
npx prettier "src/**/*.{ts,html,css,scss,json,md}" --write
```

If you're using **IntelliJ/WebStorm**: Don't forget to (install &) activate manual config in the Prettier plugin settings. Also make sure to check the `Run on reformat code` and the `Run on save` boxes.

You can use this **file pattern**:

`{**/*,*}.{css,html,js,json,md,scss,ts}`

If you're using **VSCode**: Don't forget to install Prettier extension and set it as default formatter in your `settings.json`.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true
}
```

### Configure Prettier to be used as an ESLint plugin

To use Prettier and ESLint together add these glue packages:

```shell
npm i -D eslint-config-prettier eslint-plugin-prettier
```

```shell
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

Now you can add Prettier to ESLint (the last line):

```json
"extends": [
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:@angular-eslint/recommended",
  "plugin:@angular-eslint/template/process-inline-templates",
  "plugin:prettier/recommended"
],
```

## Stylelint

To add the CSS linter Stylelint run

```shell
npm i -D stylelint stylelint-config-sass-guidelines stylelint-order stylelint-scss
```

```shell
yarn add -D stylelint stylelint-config-sass-guidelines stylelint-order stylelint-scss
```

Once installed, add this `.stylelintrc.json` or create your own:

```json
{
  "extends": "stylelint-config-sass-guidelines",
  "plugins": ["stylelint-order", "stylelint-scss"],
  "rules": {
    "color-named": null,
    "max-nesting-depth": 3,
    "scss/at-rule-no-unknown": [true, { "ignoreAtRules": ["tailwind"] }],
    "scss/no-global-function-names": null,
    "selector-max-compound-selectors": 3,
    "selector-max-id": 1,
    "selector-no-qualifying-type": [
      true,
      {
        "ignore": ["attribute", "class"]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["host"]
      }
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        "ignorePseudoElements": ["view-transition-new", "view-transition-old"]
      }
    ],
    "order/properties-alphabetical-order": null,
    "order/properties-order": [
      "display",
      "flex",
      "grid",
      "visibility",
      "opacity",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "width",
      "height",
      "outline",
      "margin",
      "border",
      "padding",
      "background",
      "background-color",
      "color",
      "text-align",
      "vertical-align",
      "list-style",
      "font-family",
      "font-size",
      "line-height",
      "letter-spacing",
      "font-weight",
      "font-style",
      "text-decoration",
      "white-space",
      "text-overflow",
      "text-shadow",
      "box-shadow",
      "overflow",
      "cursor",
      "transform",
      "transition",
      "animation"
    ]
  }
}
```

Please note that I've turned off alphabetical order and added a custom property order. You can of course change that to your liking.

For more information, see the latest [Stylelint](https://stylelint.io/user-guide/rules/list) rules on their website.

### Run Stylelint

You can run Stylelint via npx, for auto-fixing issues, add the `--fix` flag.

```shell
npx stylelint "**/*.scss --fix"
```

Or add a script to your `package.json`:

```json
{
  "scripts": {
    "lint:scss": "stylelint \"src/**/*.scss\"",
    "lint:scss:fix": "stylelint \"src/**/*.scss\" --fix"
  }
}
```

Now you can run

```shell
npm run lint:scss
```

```shell
yarn lint:scss
```

That's all, happy linting!
