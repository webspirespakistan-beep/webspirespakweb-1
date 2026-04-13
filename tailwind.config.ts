import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E8192C",
          "red-dark": "#C41424",
          dark: "#0C0C0C",
          "dark-2": "#141414",
          "dark-3": "#1C1C1C",
          "dark-4": "#242424",
          gray: "#9A9A9A",
          "gray-light": "#D4D4D4",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [
    /* CWV: Disable animations for users who prefer reduced motion (INP + battery) */
    function ({ addBase }: { addBase: Function }) {
      addBase({
        "@media (prefers-reduced-motion: reduce)": {
          "*,::before,::after": {
            "animation-duration": "0.01ms !important",
            "animation-iteration-count": "1 !important",
            "transition-duration": "0.01ms !important",
            "scroll-behavior": "auto !important",
          },
        },
      });
    },
  ],
};
export default config;
