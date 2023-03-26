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
        primary: "#59CBE8",
        secondary: "#53565A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
