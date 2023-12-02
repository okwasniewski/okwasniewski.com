module.exports = {
  mode: "jit",
  content: {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [
      "bg-blue-200",
      "text-blue-500",
      "bg-green-200",
      "text-green-500",
    ],
  },
  theme: {
    extend: {
      colors: { 
        "dark-surface": "#1E1D1D",
        "dark-surface-accent": "#2D2C2C"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
