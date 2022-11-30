/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Proxima Nova', 'sans-serif'],
      },
      colors: {
        'main-splash': '#4970bf',
        'main-': '#d9cec1',
        'main-second': '#bf7d65',
        'main-third': '#bf0404',
        'main-fourth': '#f23838',
      },
    },
  },
  plugins: [],
};
