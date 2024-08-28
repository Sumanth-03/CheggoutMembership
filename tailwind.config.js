/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        primary:'#202F44',
        secondary:'#EFC37F',
        turtiary:'#F56E24',
      },
      screens: {
        xs: '380px',
      },
    },
  },
  plugins: [],
});

