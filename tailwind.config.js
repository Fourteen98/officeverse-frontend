/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
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
