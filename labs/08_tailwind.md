# 08 Tailwind CSS

<!-- TOC -->

- [Setup Tailwind CSS](#setup-tailwind-css)
- [Apply some styles](#apply-some-styles)
- [Style the same form](#style-the-same-form)
- [Bonus: flex & grid layout](#bonus-flex--grid-layout)
- [Report your experience](#report-your-experience)
  <!-- TOC -->

## Setup Tailwind CSS

1. To add Tailwind CSS and other packages run

   ```shell
   npm i -D tailwindcss @tailwindcss/postcss postcss
   ```

   ```shell
   yarn -D tailwindcss @tailwindcss/postcss postcss
   ```

2. Now, add this file to the root of your project `.postcssrc.json`:

   ```json
   {
     "plugins": {
       "@tailwindcss/postcss": {}
     }
   }
   ```

3. Finally, add this NOT to your global `src/styles.scss` which you'd do for a whole project, but instead to your `lab-08-tailwind.scss`:

   ```scss
   @use 'tailwindcss';
   ```

## Apply some styles

Open the `lab-08-tailwind.html`.

Use the [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) to change your component's layout.

## Which of the following labs did you like best?

- Lab 04 Advanced CSS
- Lab 05 Responsive CSS
- Lab 06
  - Flex layout
  - Grid layout
  - Transform, Transitions & Animations

Reimplement your favorite lab using Tailwind CSS.

## Bonus: style the same form

Do you remember lab 04 where you've styled a form with and without Bootstrap?

Now try styling the same form again with Tailwind CSS classes.

Notice that all default styles have been removed by Tailwind.

## Report your experience

After you're done with the lab report your experience using Tailwind CSS to the other participants.

What do you think makes Tailwind so popular?
