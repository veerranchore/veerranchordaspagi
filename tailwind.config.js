export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3d6b4f",
        "military-yellow": "#F2B705",
        "background-light": "#f6f7f7",
        "background-dark": "#161c18",
      },
      fontFamily: {
        "display": ["Public Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
    },
  },
  plugins: [],
}
