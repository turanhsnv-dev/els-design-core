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
          dark: "#0B0C15", // Cosmic Midnight
          light: "#121421", // Biraz açıq ton
        },
        primary: "#6467f2", // Electric Indigo
        accent: "#a855f7", // Purple glow
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-syne)"],
        logo: ["var(--font-logo)"],
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