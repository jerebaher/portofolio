/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'xxs': '10rem',
      }
    },
    screens: {
      'xs': '480px',
    }
  },
  plugins: [],
}
