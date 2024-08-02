/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "popins": "Poppins, sans- serif"
    },
    colors: {
      brown: {
        dark: '#6f6a42',
        light: '#efe8c2'
      }
    }
  },
  plugins: [],
}

