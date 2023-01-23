/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#9155FD",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
