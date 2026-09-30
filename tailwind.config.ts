import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-950": "#050505",
        "black-900": "#0B0B0B",
        "black-800": "#141414",
        "black-700": "#1F1F1F",
        gold: {
          300: "#E8D5A3",
          400: "#D8B866",
          500: "#C9A24A",
          600: "#A8842F",
        },
        ivory: "#F5F1E8",
        muted: "#A3A3A3",
        "muted-dark": "#6B6B6B",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 30px rgba(201, 162, 74, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
