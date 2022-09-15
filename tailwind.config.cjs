/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f8fda",
        secondary: "#E2E8F0",
        tertier:'#FBBC05',
        abu_abu:'#838383',
        biru:'#87BEFF',
        biru_fb:'#f0f2f5',
        abu_abu_pucat:'#F2F2F2'
      }
    },
  },
  plugins: [],
}
