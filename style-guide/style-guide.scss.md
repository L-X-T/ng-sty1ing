# SCSS Style Guide

Last updated on 2024-04-20.

This document contains guidelines for SCSS files.

[app] is a placeholder for your project's prefix.

## Do

### Must do

- use [**Prettier**](https://prettier.io/)
- use **CSS3**
- use **SCSS**
- use **strict formatting**
  - use **2 spaces intents** (Prettier)
  - use **`'single quotes'`** (Prettier)
  - use **1 selector per line**
  - use **1 property per line**
  - use **`dash-separated-lowercase`** for selectors
  - separate rules by new lines
  - use meaningful empty lines to separate code
  - put a blank line (two line breaks) between rules
- use classes, not elements, ids only if necessary (=never?)
  - however component selectors are okay to nest styles
- use prefix `${app}-`
  - or project specific
  - also applies to scss variables ($${app}), mixins and extends
  - but not to css variables (custom properties)
- max 2, in rare cases 3 nested selectors
- use global variables (css variables / custom properties)
- use component styles for component styles (preferably)
- use global styles for global styles
- use shorthand wherever possible and useful
  - `margin: 1em auto;`
- write zero values without unit
  - `margin: 0;`
- explicitly write the 0 (Prettier)
  - `margin: 0.5em;`
- use `//` comments
- use 3 character hexadecimal notation where possible (`#fff` instead of `#ffffff`)

### Should do

- write less & simple scss
- use BEM syntax (Block, Element, Modifier)
  - `.${app}-person {}`
  - `.${app}-person__head {}`
  - `.${app}-person--tall {}`
  - there are no nested BEM selectors
- organise global styles by using imports
  - 1.) Variables (breakpoints, colors, sizes)
  - 2.) Libraries and helpers (CDK, Bootstrap)
  - 3.) Reset, base & extends
  - 4.) Theming
  - 5.) Layout
  - 6.) Objects
  - 7.) Other, legacy
- order and group properties
  - `.${app}-person {`
    - 1.) extends
    - 2.) mixins
    - 3.) display (display, flex, grid, visibility, opacity)
    - 4.) position (position, top, right, bottom, left, z-index)
    - 5.) size (width, height)
    - 6.) box (margin, border, padding)
    - 7.) colors (background, color)
    - 8.) content (text-align, font, ...)
    - 9.) misc (overflow, cursor, ...)
    - 10.) transform (translate, scale)
    - 11.) animation (transition, animation)
  - `}`
- organise nested selectors
  - `.${app}-person {`
    - `&::pseudo-elements {}`
    - `&:pseudo-classes {}`
    - combinators
      - `+`
      - `~`
      - `>`
    - child `elements/tags {}`
    - child `#ids {}`
    - child `.classes {}`
    - child `[attribute-selectors] {}`
  - `}`
- container for a single item
  - if it is a necessary container, consider using `.${app}-person` and `.${app}-person__inner`
  - or use `.${app}-person-cnt {}`
- use status classes, set by JavaScript. Prefix them with `.${app}-is-` and choose the most appropriate verb adjective like
  - `.${app}-is-active`
  - `.${app}-is-loading`
  - `.${app}-is-visible` (BTW `*ngIf`?)
  - `.${app}-is-disabled`
  - `.${app}-is-expanded`
  - `.${app}-is-collapsed`
- prefer `rgba()` or `rgb()` instead of `#f00`

## Don't

- try to **avoid inline styles** - use classes everywhere
- try to **avoid `!important`** - it's a bad habit believe me
- try to **avoid using existing library classes** - use prefixed classes instead
  - (e.g. don't use `.heading`, `.label` or `.form-control`)
  - only use those classes to override the lib's own css
- try to avoid using elements & ids as selectors - use classes instead
  - however component selectors are okay to nest styles
- try to avoid nesting with more than 2 levels (in rare cases 3)
  - okay: `.${app}-is-home .${app}-person`
  - hell no: `body.${app}-is-home .${app}-person.${app}-is-disabled > .${app}-avatar`
  - use modifier instead: `.${app}-avatar--disabled`
- try to avoid `float` use css grid or flexbox instead
  - howto [choose between grid and flexbox](https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412)
- try to avoid writing properties which could be shorthanded (e.g. margin)
- try to avoid `&` to nest styles (for better readability)

## Resources

- [Prettier](https://prettier.io/)
- [Sass Guidelines](https://sass-guidelin.es/)
- [css { guide: lines; }](https://cssguidelin.es/)
- [CSS Guidelines](https://github.com/chris-pearce/css-guidelines)
- [Google CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS)
