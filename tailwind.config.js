/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'fira-sans': ['Fira Sans'],
      },
      height: {
        '1000': '1000px'
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
  ],
}