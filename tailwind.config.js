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
        },
        backgroundImage: {
          'main_header_bg': 'linear-gradient(90deg, rgba(70,14,14,1) 0%, rgba(241,36,36,1) 50%, rgba(0,127,255,1) 100%);'
        },
        animation: {
          'wave': 'flutter 2s linear infinite',
        }
      },
    },
    plugins: [],
  }