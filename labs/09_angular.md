# 09 Angular Styling

<!-- TOC -->

- [View Encapsulation](#view-encapsulation)
- [inject(DOCUMENT)](#injectdocument)
  - [Bonus: Add a back to top button](#bonus-add-a-back-to-top-button)
- [Angular 17 view transitions](#angular-17-view-transitions)
  - [Bonus: Customize view transition](#bonus-customize-view-transition)
- [Bonus: Angular Material form](#bonus-angular-material-form)
  <!-- TOC -->

## View Encapsulation

Open the `lab-09-angular.ts`.

1. Add the `ViewEncapsulation.ShadowDom` to your `Lab09AngularComponent`.
2. Do you notice any difference? What happened? Is this good?
3. Think about the `Pros` and `Cons` of the `ShadowDom`.

## inject(DOCUMENT)

Now switch to your `navbar.component.ts`.

1. Do you find a usage of the `document`?
2. If yes, replace it with Angular's `DOCUMENT` token.

Note: While this usage of the `document` would not be a problem concerning Server Side Rendering, it's generally considered a good practice to always use the `DOCUMENT` token.

### Bonus: Add a back to top button

Now add a back to top button to your App. Where is the right place for that? Wherever you decide to put it, use the `DOCUMENT` token once more.

## Angular 17 view transitions

To use the Angular 17's view transition feature you have to add it to the `Router`.

In a standalone app that can be done:

- in the `ApplicationConfig` or else
- wherever you provide the `Router`

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(), // the magic
    ),
  ],
};
```

### Bonus: Customize view transition

You can add a custom view transition to your global styles. Search for a nice transition or use the example below. This would be a good opportunity to add a SCSS partial named `styles/_view-transitions.scss` and then include this partial in your `styles.scss`.

```scss
@import 'styles/view-transitions'; // without '_' and '.scss'
```

<details>
<summary>Show CSS example for view transition</summary>
<p>

```scss
@keyframes fade-in {
  from {
    opacity: 0;
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}

@keyframes slide-from-right {
  from {
    transform: translateX(30px);
  }
}

@keyframes slide-to-left {
  to {
    transform: translateX(-30px);
  }
}

::view-transition-old(root) {
  animation:
    90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
    300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
}

::view-transition-new(root) {
  animation:
    210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
    300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
}
```

</p>
</details>

Note: this example was copied from [Netanel Basal's blog](https://netbasal.com/angular-v17s-view-transitions-navigate-in-elegance-f2d48fd8ceda).

## Bonus: Angular Material form

Do you remember lab 04 & lab 8 where you've styled a form with and without Bootstrap and with Tailwind CSS?

Now try implementing the same form again with Angular Material.

1. If it's not in your `package.json` already, add Material to your project:

   ```shell
   npm i @angular/material
   ```

   ```shell
   yarn @angular/material
   ```

   Hint: Make sure your major Material version matches your Angular version.

2. Know use these Material components in your form:
   1. [Input](https://material.angular.io/components/input/overview)
   2. [Checkbox](https://material.angular.io/components/checkbox/overview)
   3. [Button](https://material.angular.io/components/button/overview)

   Note: The Material modules can be imported into the current component without further ado.

How do you like the Material form compared to the other variants? Report to the other participants one last time!
