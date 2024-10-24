/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2879e9",
        secondary: "#2879e9",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",  
        sm: "3rem",
      },
    },
  },
  plugins: [],
}
}
