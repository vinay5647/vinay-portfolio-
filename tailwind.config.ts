import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#030712",
          card: "#0b0f19",
          border: "#1e293b",
          blue: "#0072FF",
          purple: "#7000FF",
          cyan: "#00F2FE",
          emerald: "#00F5A0",
          magenta: "#FF007F",
        },
      },
      backgroundImage: {
        "aurora-gradient":
          "radial-gradient(ellipse at 50% -20%, rgba(112,0,255,0.35), rgba(0,114,255,0.25), rgba(0,242,254,0.15), rgba(3,7,18,1))",
        "cyber-grid":
          "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite alternate",
        "aurora-shift": "auroraShift 15s ease infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(3deg)" },
        },
        glowPulse: {
          "0%": { boxShadow: "0 0 15px rgba(0, 242, 254, 0.2)" },
          "100%": { boxShadow: "0 0 35px rgba(112, 0, 255, 0.6)" },
        },
        auroraShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jet-brains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
