/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
    colors: {
    'tangerine': '#F28500'
    }
  },
  plugins: [require('flowbite/plugin')]
}
