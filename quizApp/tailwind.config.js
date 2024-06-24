/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class", // false or media
  theme: {
    extend: {
      backgroundImage: {},

      fontFamily: {
        fontFamily: {
          sans: ["sans-serif", "Georgia", ...defaultTheme.fontFamily.sans],
        },
      },

      screens: {
        md: { min: "416px", max: "850px" },

        sm: { max: "415px" },
      },
    },
  },
  plugins: [],
};
