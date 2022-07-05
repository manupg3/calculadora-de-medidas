/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'small': { 'raw': '(max-width: 640px)' },
      }
    },
  },
  plugins: [],
}
