module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#219EBC",
        DEFAULT: "#023047",
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
      purple: {
        light: "#7D92EE",
        DEFAULT: "#6C56CA",
      },
      pink: "#D47DEE",
      black: "#3D3D3D",
      white: "#FFFFFF",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
