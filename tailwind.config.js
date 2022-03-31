
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['"Cairo"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#f5fbfe",
          100: "#eaf6fc",
          200: "#cbe9f8",
          300: "#abdcf4",
          400: "#6cc2eb",
          500: "#2da8e3",
          600: "#2997cc",
          700: "#227eaa",
          800: "#1b6588",
          900: "#16526f",
        },
        secondary: {
          50: "#feffff",
          100: "#fcfeff",
          200: "#f8fdff",
          300: "#f3fbff",
          400: "#eaf8ff",
          500: "#e1f5ff",
          600: "#cbdde6",
          700: "#a9b8bf",
          800: "#879399",
          900: "#6e787d",
        },
      },
      screens: {
        xs: { max: "360px" },
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
};
