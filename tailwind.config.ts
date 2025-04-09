import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/(site)**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2576BC",
        secondary: "#00b4d8",
        grays: "#EAF1F7",
        brown: "#8D3236",
        logored: "#9D0604"
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
      },
      animation: {
        pop: 'pop 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
