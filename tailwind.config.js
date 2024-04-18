/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      'almost-white': 'rgba(255, 255, 255, 0.8)',
      lightcyan: 'lightcyan',
      orange: 'rgb(255, 128, 0)',
    },
    fontFamily: {
      sans: ['Roboto', 'Helvetica Neue', 'Verdana', 'Arial', 'sans-serif'],
    },
    extend: {
      flexGrow: {
        5: '5',
      },
      flexShrink: {
        5: '5',
      },
      lineHeight: {
        'very-loose': '2.25',
        'extra-loose': '3',
      },
    },
  },
  plugins: [],
};
