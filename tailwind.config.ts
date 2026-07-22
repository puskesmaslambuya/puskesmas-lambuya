import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16A34A", // Hijau utama (identitas kesehatan)
          light: "#22C55E",
          dark: "#15803D",
          50: "#F0FDF4",
          100: "#DCFCE7",
        },
        secondary: {
          DEFAULT: "#0EA5E9", // Biru (kepercayaan, pelayanan publik)
          light: "#38BDF8",
          dark: "#0284C7",
          50: "#F0F9FF",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F5F5",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 4px 20px -4px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 12px 30px -8px rgba(15, 23, 42, 0.16)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
