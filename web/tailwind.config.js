const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'bg-theme-a1':'bg-gray-100',
        'bg-theme-a2':'bg-gray-50',
        'bg-theme-a3':'bg-gray-800',
        'bg-theme-b4':'#243c5a',
        'bg-theme-b5':'#243c5a',
        'bg-theme-b6':'#243c5a',
        'bg-theme-b7':'#243c5a',
        'bg-theme-b8':'#243c5a',
        'bg-theme-c9':'bg-trueGray-700',
        'bg-theme-c10':'bg-trueGray-800',
        'bg-theme-c11':'bg-trueGray-900'
      }),
      colors: {
        trueGray: colors.trueGray,
        'bg-theme-a1':'bg-gray-100',
        'bg-theme-a2':'bg-gray-50',
        'bg-theme-a3':'bg-gray-800',
        'bg-theme-b4':'#243c5a',
        'bg-theme-b5':'#243c5a',
        'bg-theme-b6':'#243c5a',
        'bg-theme-b7':'#243c5a',
        'bg-theme-b8':'#243c5a',
        'bg-theme-c9':'bg-trueGray-700',
        'bg-theme-c10':'bg-trueGray-800',
        'bg-theme-c11':'bg-trueGray-900'
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
