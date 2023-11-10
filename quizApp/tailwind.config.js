/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        '': "url('')",
      },

      fontFamily: {
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
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

