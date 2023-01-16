const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Raleway', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        black: '#222222',
        white: '#ffffff',
        'light-red': '#FFA3A3',
        red: '#FC5252',
        blue: '#381DDB',
        a1: '#E0E0E0',
        a2: '#DB841D',
        a3: '#AA6550',
        a4: '#C00096',
        a5: '#FFCDCD',
        a6: '#FFBE9D',
        a7: '#84C4FF',
      },
    },
  },
  plugins: [],
}
