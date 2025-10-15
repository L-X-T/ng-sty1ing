# 02 CSS Foundations

Open the `lab-02-foundations.html` to see the html of this lab.

Please put your css into `lab-02-foundations.scss`.

Note: Even though this is a `SCSS` file you can use `CSS` because everything that work in `CSS` also works in `SCSS`.

## Foundations

1. Style the top `<h1>` tag to use a color and set a custom font. Which font did it use before?
2. Style all `<code>`tags to use orange text. Why where they pink before?
3. Use a class selector to ensure that the `<code>` element in the second `<li>` element has a different color (e.g. darkgreen).
4. Switch the order of the rules you created and use the DevTools to understand how specifity works (for the `<code>` elements).
5. Set a default font (e.g. sans-serif) for the entire content of your component and use `inherit` to change the font of the `<li>` items, too.
6. Use a combinator to give all `<li>` elements but the first 1 a black background and white text color.
7. Now, remove the list style of these list items.

## Bonus: Styling experiments

1. Try inline styling for 1 or 2 elements in your `lab-02-foundations.html`.
2. You can assign styles dynamically using `[ngStyle]="{ color: myColor }` or `[style.color]="myColor"`.
3. Try adding a `<style>` tag to your `<head>` section. Do you think that's a good idea?
