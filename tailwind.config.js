/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--primary-font)", "sans-serif"],
        roboto: ["var(--secondary-font)", "serif"],
        lato: ["var(--tertiary-font)", "serif"],
      },
    },
  },
  plugins: [],
});
