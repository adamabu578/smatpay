/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5b4fa8", // Deep Purple
          light: "#7b6fc1",
          dark: "#4a3f8c",
        },
        secondary: {
          DEFAULT: "#a0d8c9", // Mint Green
          light: "#c4ebe2",
        },
        accent: {
          cream: "#fbf7ed",
          gold: "#e6c200",
        },
        neutral: {
          light: "#f3f4f6",
          dark: "#1f2937",
        }
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Poppins", "sans-serif"],
    },
    animation: {
      blob: "blob 7s infinite",
      "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      float: "float 6s ease-in-out infinite",
    },
    keyframes: {
      blob: {
        "0%": { transform: "translate(0px, 0px) scale(1)" },
        "33%": { transform: "translate(30px, -50px) scale(1.1)" },
        "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        "100%": { transform: "translate(0px, 0px) scale(1)" },
      },
      fadeInUp: {
        "0%": { opacity: "0", transform: "translateY(20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-20px)" },
      },
    },
  },
  plugins: [],
};
