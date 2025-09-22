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
        // IEEE Conference color scheme
        "ieee-blue": "#00629b",
        "ieee-burgundy": "#813c54",
        "ieee-gold": "#b8860b",
        "ieee-red": "#b2132e",
        "ieee-navy": "#52739e",
        "ieee-dark-red": "#e82945",
        "ieee-gray": "#505050",
        "ieee-light-gray": "#fafafa",
        "ieee-white": "#ffffff",
        "ieee-nav-blue": "#0f172a",
        "ieee-nav-gray": "#64748b",
        "ieee-nav-light": "#f8fafc",
        "ieee-border": "#e2e8f0",
        "ieee-text-shadow": "#d0d0d0",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
        "ieee-sans": [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      spacing: {
        "container-padding": "var(--container-padding)",
      },
      maxWidth: {
        container: "1000px",
        content: "900px",
      },
      boxShadow: {
        ieee: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "ieee-lg":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        text: "1px 1px 2px #d0d0d0",
        "banner-text": "2px 2px 4px rgba(0, 0, 0, 0.7)",
      },
      aspectRatio: {
        banner: "3/1",
        "banner-mobile": "2.5/1",
        "banner-tablet": "2.8/1",
      },
      animation: {
        "fade-in": "fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionProperty: {
        ieee: "all",
      },
      transitionTimingFunction: {
        ieee: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        ieee: "200ms",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
