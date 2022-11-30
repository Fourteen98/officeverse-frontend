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
        'main-1': '#4970bf',
        'main-2': '#d9cec1',
        'main-3': '#bf7d65',
        'main-4': '#bf0404',
        'main-5': '#f23838',
      },
    },
  },
  plugins: [],
};
