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
   npm i -D tailwindcss postcss autoprefixer
   ```
   or
   ```shell
   yarn -D tailwindcss postcss autoprefixer
   ```
2. Now init your Tailwind config by
   ```shell
   npx tailwindcss init
   ```
3. Set the `content` of the generated `tailwind.config.js` to this line (for Angular):

   ```js
   module.exports = {
     content: ['./src/**/*.{html,ts}'], // update this line without the comment
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. Add our custom Google font to the `tailwind.config.js`:

   ```js
   module.exports = {
     content: ['./src/**/*.{html,ts}'],
     theme: {
       fontFamily: {
         sans: ['Roboto', 'Helvetica Neue', 'Verdana', 'Arial', 'sans-serif'],
       },
       extend: {},
     },
     plugins: [],
   };
   ```

5. Finally, add this NOT to your global `src/styles.scss` which you'd do for a whole project, but instead to your `lab-08-tailwind.scss`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
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
