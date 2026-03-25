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
        offwhite: "#F5F0EB",
        graphite: "#1A1A1A",
        graphite2: "#242424",
        graphite3: "#2E2E2E",
        neon: {
          purple: "#A020F0",
          cyan: "#00FFFF",
          "purple-soft": "#B44EF5",
          "cyan-soft": "#7FFFFF",
        },
        surface: {
          dark: "#0D0D0D",
          card: "#161616",
          border: "#2A2A2A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 10vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.8rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.4rem, 2.5vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "glow-purple": "radial-gradient(ellipse at center, rgba(160,32,240,0.3) 0%, transparent 70%)",
        "glow-cyan": "radial-gradient(ellipse at center, rgba(0,255,255,0.2) 0%, transparent 70%)",
        "mesh-dark": "radial-gradient(at 40% 20%, rgba(160,32,240,0.08) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(0,255,255,0.05) 0px, transparent 50%)",
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "scan-line": "scanLine 4s linear infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "orbit": "orbit 20s linear infinite",
        "text-shimmer": "textShimmer 3s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(200px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(200px) rotate(-360deg)" },
        },
        textShimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(160,32,240,0.5), 0 0 60px rgba(160,32,240,0.2)",
        "glow-cyan": "0 0 20px rgba(0,255,255,0.5), 0 0 60px rgba(0,255,255,0.2)",
        "glow-purple-sm": "0 0 10px rgba(160,32,240,0.4)",
        "glow-cyan-sm": "0 0 10px rgba(0,255,255,0.4)",
        "card": "0 1px 0 rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
