/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        arrowRight: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(20px)" },
        },
        arrowLeft: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-20px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
