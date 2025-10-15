# 04 CSS Advanced

<!-- TOC -->

- [Positioning](#positioning)
- [Images](#images)
- [Background](#background)
- [Units](#units)
- [Fonts](#fonts)
- [Bonus: Form experiments](#bonus-form-experiments)
  - [Form field styling](#form-field-styling)
  - [Form with Bootstrap](#form-with-bootstrap)
  - [Reflect](#reflect)
  <!-- TOC -->

Open the `lab-04-advanced.html` and `lab-04-advanced.scss`.

## Positioning

1. See the 4 `<div>` on the page? Add some margin between the boxes.
2. Assign the different `position` properties and play with them.
3. Position the `absolute` 1 relative to the `relative` 1. How can you achieve it?
4. Try placing the `absolute` 1 on top and below the `relative` 1 using `z-index`.
5. Put the `fixed` box on the bottom.
6. Try to make the `sticky` stick like a navigation.

## Images

1. Add a `<img>` tag to the page. You can look for images in the `src/assets` dir or include your own image.
2. Wrap your image in an `<div>` container a try placing it in the middle of your boxes.
3. Add some box-shadow to it.

## Background

1. Add a slight background gradient to your page.

   ```css
   background-image: radial-gradient(azure, transparent);
   ```

2. Apply a `filter` to it.

   ```css
   filter: grayscale(25%);
   ```

## Units

Try to set the width each of the 4 boxes of _Positioning_ with another unit:

- px
- rem
- em
- %
- vw / vh

## Fonts

Apply each of these properties to a text:

- font-size
- font-weight
- font-style
- line-height
- letter-spacing
- white-space
- text-decoration
- text-shadow

## Bonus: Form experiments

### Form field styling

Make the form on the bottom of the page look good without using Bootstrap. What are the difficulties? Discuss with the trainer.

### Form with Bootstrap

Make the form on the bottom of the page look good using Bootstrap classes. You can look onto the `Flight Search` for guidance.

### Reflect

Which one was easier to implement? Would you use Bootstrap in your Angular app?
