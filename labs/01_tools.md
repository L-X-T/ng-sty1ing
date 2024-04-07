# 01 Styling Tools

<!-- TOC -->

- [Angular ESLint](#angular-eslint)
- [Prettier](#prettier)
- [Configure Prettier to be used as an ESLint plugin](#configure-prettier-to-be-used-as-an-eslint-plugin)
  <!-- TOC -->

This lab will get you started with some important **CSS Tools**.

You don't need to do it, because they're already included.

This lab however is useful for your own **Angular projects**.

## Angular ESLint

To add Angular ESLint to your own Angular app, simply run:

```shell
ng add @angular-eslint/schematics
```

Note, that with the newest version the plugin `@angular-eslint/template/accessibility` is included per default.

Now add the `.eslintrc.json` and the `.eslintignore` from this workspace.

If you want, you can adjust the configs. For more information, see the latest [Angular ESLint](https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin-template) rules on GitHub.

## Prettier

To add Prettier run

```shell
npm i -D prettier
```

or

```shell
yarn -D prettier
```

Now add the `.prettierrc.json` and the `.prettierignore` from this workspace.

If you want, you can adjust the configs. See [Prettier Configuration File](https://prettier.io/docs/en/configuration.html).

If you're using **IntelliJ/WebStorm**: Don't forget to (install &) activate manual config in the Prettier plugin settings. Also make sure to check the `Run on reformat code` and the `Run on save` boxes.

You can use this file pattern: `{**/*,*}.{css,html,js,json,md,scss,ts}`

If you're using **VSCode**: Don't forget to install Prettier extension and set it as default formatter in your `settings.json`.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true
}
```

## Configure Prettier to be used as an ESLint plugin

To configure them both together add these packages.

```shell
npm i -D eslint-config-prettier eslint-plugin-prettier
```

or

```shell
yarn -D eslint-config-prettier eslint-plugin-prettier
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

That's all, happy linting!
