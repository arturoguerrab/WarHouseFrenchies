/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#003049',
      'secondary': '#780000',
      'acent': '#c1121f',
      'complement': '#669bbc',
      'background': '#e5e5e7',
    },
    extend: {},
  },
  plugins: [],
});