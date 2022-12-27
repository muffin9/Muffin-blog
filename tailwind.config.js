/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: { 'md': {'max': '767px'} },
      extend: {
        boxShadow: {
          'card': '0 0 8px rgba(0, 0, 0, 0.15)',
          'hover_card': '0 0 10px rgba(0, 0, 0, 0.3)'
        }
      },
    },
    plugins: [],
  }