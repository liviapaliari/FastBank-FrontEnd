/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F5F5F5",
      },
      backgroundImage: {
        "img-1": "url('./src/assets/credit-card.jpg')",
        "img-2": "url('./src/assets/loan.jpg')"
      }
    },
  },
  plugins: [],
};