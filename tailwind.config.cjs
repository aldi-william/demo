/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#548ecb",
        secondary: "#E2E8F0",
        tertier:'#FBBC05',
        abu_abu:'#838383',
        biru:'#87BEFF',
        biru_fb:'#f0f2f5'
      }
    },
  },
  plugins: [],
}
