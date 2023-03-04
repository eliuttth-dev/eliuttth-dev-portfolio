/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primaryBlack: '#252525',
        secondaryBlack: '#3d3d3d',
        primaryWhite: '#e9e9e9',
        secodaryWhite: '#ddd'
      }
    },
  },
  plugins: [],
}
