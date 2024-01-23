/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#34CAA5',
        primary01: '#34CAA51A',
        primary012: '#34CAA51F',
        black: '#000',
        black50: '#0D062D',
        black100: '#26282C',
        black200: '#22242C',
        black200: '#3A3F51',
        white: '#fff',
        white20: '#F7F8FA',
        white50: '#FAFAFA',
        grey50: '#EBECF2',
        grey70: '#F5F5F5',
        grey80: '#9CA4AB',
        grey90: '#EDF2F6',
        grey100: '#B2ABAB',
        grey200: '#E5EAEF',
        grey300: '#A3A3A3',
        grey400: '#DADDDD',
        grey600: '#787486',
        grey700: '#EDF2F7',
        grey800: '#E1DFDF',
        grey900: '#898989',
        grey1000: '#606060',
        red: '#ED544E',
        red012: '#ED544E1F',
        neutral500: '#737373',
        neutral600: '#525252'
      },
      fontFamily: {
        inter: ['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

