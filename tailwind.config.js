/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-dark": "#555454",
        "light-gray": "#ADC6EA",
        primary: "#FF9900",
        secondary: "#0A48A4",
      },
      lineHeight: {
        19: "19px",
        29: "29px",
        39: "39px",
      },
    },
  },
  plugins: [],
});
