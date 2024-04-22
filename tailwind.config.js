/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F28C28",
        bgNote: "#FFFFFF",
        bgMain: "#E5E4E2",
        dBlack: "#111",
        lblack: "#333",
      },
      fontFamily: {

      }
    },
  },
  plugins: [],
}

