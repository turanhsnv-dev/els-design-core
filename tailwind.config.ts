import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#060606", // Deep Premium Black
          light: "#111111", // Sleek Surface
        },
        primary: "#FFFFFF", // Crisp White
        accent: "#888888", // Muted Grey
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-syne)"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #282839 1px, transparent 1px), linear-gradient(to bottom, #282839 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;