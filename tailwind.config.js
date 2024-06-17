/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "40px",
    },
    extend: {
      colors: {
        primary: "#0284c7",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

