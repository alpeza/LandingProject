const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        'theme-a1':'bg-gray-100',
        'theme-a2':'bg-gray-50',
        'theme-a3':'bg-gray-800',
        'theme-b4':'bg-indigo-100',
        'theme-b5':'bg-indigo-300',
        'theme-b6':'bg-indigo-500',
        'theme-b7':'bg-indigo-600',
        'theme-b8':'bg-indigo-900',
        'theme-c9':'bg-trueGray-700',
        'theme-c10':'bg-trueGray-800',
        'theme-c11':'bg-trueGray-900'
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
