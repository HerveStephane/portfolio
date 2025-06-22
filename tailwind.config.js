const defaultColors = require('tailwindcss/colors');

const n26Green = {
  50:  '#e6faf4',
  100: '#bff1dc',
  200: '#95e7c3',
  300: '#6bdbaa',
  400: '#42d290',
  500: '#00b67a', // base N26 green
  600: '#009f69',
  700: '#008a59',
  800: '#007549',
  900: '#005a36',
};

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        blue: n26Green,
        primary: n26Green, // optional alias for clarity
      },
    },
  },
  plugins: [],
};
