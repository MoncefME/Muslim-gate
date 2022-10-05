/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "quran": ["'Amiri Quran'", "serif"],
        "verse": ["'Cairo'", "sans-serif"]
      }
    },
  },
  plugins: [],
}