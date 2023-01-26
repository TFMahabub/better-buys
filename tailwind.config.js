/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#9155FD",
      secondary: "#F4F5FA",
      textColor: "rgba(58, 53, 65, 0.87);",
      white: "#ffffff",
      textColorLight: "#888682",
      borderColor: "#c0c0c0",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
