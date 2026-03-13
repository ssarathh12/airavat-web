/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ED5906',
          black: '#000000',
          cream: '#F6EDDD',
        },
      },
      fontFamily: {
        // This is your 'funky' header font
        display: ['Syne', 'sans-serif'],
        // This is your 'clean' body font
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}