import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        epsom: {
          salt: "#FAF0D9",
          soft: "#F3E6C4",
          mist: "#FFF8EC",
          ink: "#2A2118",
          muted: "#BDA587",
          maroon: "#D39645",
          deep: "#F5B64E",
          crystal: "#BDA587",
          pearl: "#FAF0D9",
          dark: "#FAF0D9",
          darker: "#F3E6C4",
          accent: "#D39645",
          accent2: "#F5B64E",
          mint: "#BDA587",
          teal: "#1F6B63",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-tenor)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(42, 33, 24, 0.08)",
        "soft-lg": "0 16px 40px rgba(42, 33, 24, 0.14)",
        glow: "0 8px 30px rgba(211, 150, 69, 0.28)",
        "glow-lg": "0 12px 40px rgba(245, 182, 78, 0.32)",
      },
      backgroundImage: {
        "gradient-cinematic":
          "linear-gradient(180deg, rgba(42,33,24,0.25) 0%, rgba(42,33,24,0.78) 100%)",
        "gradient-accent": "linear-gradient(135deg, #D39645 0%, #F5B64E 100%)",
        "salt-hero":
          "linear-gradient(180deg, rgba(42,33,24,0.45) 0%, rgba(42,33,24,0.62) 55%, rgba(42,33,24,0.82) 100%)",
      },
      keyframes: {
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee-scroll 45s linear infinite",
        "marquee-slow": "marquee-scroll 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
