/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import textShadow from "tailwindcss-textshadow";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#F59E0B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      Keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [typography, textShadow],
};
