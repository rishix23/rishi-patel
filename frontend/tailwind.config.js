module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: {
        "button-blue": "#3182ce", // sets text color to blue
      },
    },
  },
  plugins: [],
};
