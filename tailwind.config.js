/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './public/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        nova: ['Proxima Nova', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'main-splash': '#4970bf',
        'main': '#d9cec1',
        'main-second': '#bf7d65',
        'main-third': '#bf0404',
        'main-fourth': '#f23838'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}