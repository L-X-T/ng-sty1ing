# 07 SCSS

<!-- TOC -->

- [Adding SCSS variables](#adding-scss-variables)
- [Do the nesting](#do-the-nesting)
- [Media queries](#media-queries)
- [Bonus: Other SCSS features](#bonus-other-scss-features)
  <!-- TOC -->

This lab doesn't have its own component. Instead, we want to improve our existing (S)CSS.

## Adding SCSS variables

Did you do the bonus task of the last lab? A global **custom property** for the `10px` margin and gap?

Well if you have than fine if you haven't, then use a **SCSS variable** for that now.

Anyway, try finding values of _colors_ that could be put into a **SCSS variable**.

If you don't know what to do, search for `10px`, `15px` and `deepskyblue` in your stylesheets.

Please note that in our solution custom properties are globally whereas SCSS vars have local scope.

## Do the nesting

Now nest all styles that belong together. This makes it easier for us to group styles that belong together.

Here are two examples - both using the `&` to connect selectors. Instead of:

```css
.app-flex-container > div:nth-child(2n) {
  width: 120px;
  font-size: 40px;
}
```

We write:

```scss
.app-flex-container {
  //[...]
  > div {
    //[...]
    &:nth-child(2n) {
      width: 120px;
    }
  }
}
```

And instead of:

```css
div.transition:hover {
  transform: scale(3);
}
```

We write

```scss
div.transition {
  //[...]
  &:hover {
    transform: scale(3);
  }
}
```

## Media queries

Media queries can be nested too. Try adding some nesting to your media queries of lab 05.

## Bonus: Other SCSS features

Those two feature are the bread and butter of SCSS. However, there is more to explore. Use some other features and then present what you came up with to the others.

https://sass-lang.com/documentation/
