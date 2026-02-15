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
  },
  plugins: [],
};
