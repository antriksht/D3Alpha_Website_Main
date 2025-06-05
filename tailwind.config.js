/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E9204F',
        secondary: '#5422e8',
        dark: '#1a1a1a',
      },
      fontFamily: {
        'trade-gothic': ['Trade Gothic', 'sans-serif'],
        'avant-grade': ['Avant Grade', 'sans-serif'],
      },
    },
  },
  plugins: [],
}