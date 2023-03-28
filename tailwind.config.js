/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-raleway)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#59CBE8",
          50: "#D6F2F9",
          100: "#C5EDF7",
          200: "#A1E1F2",
          300: "#7DD6ED",
          400: "#59CBE8",
          500: "#28BCE1",
          600: "#1997B7",
          700: "#136F86",
          800: "#0C4655",
          900: "#051D24",
        },
        secondary: "#53565A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
