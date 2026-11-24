/**
 * Tailwind CSS configuration
 */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        primary: "#00d8ff",
        secondary: "#9c27b0",
        accent: "#7c4dff",
      },
      fontFamily: {
        sans: ["'Inter', sans-serif"],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
