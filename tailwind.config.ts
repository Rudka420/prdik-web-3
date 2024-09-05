import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        pulseRed: {
          '0%, 100%': { backgroundColor: 'transparent', color: '#0e7490' }, // transparent a původní barva textu
          '50%': { backgroundColor: '#f87171', color: '#ffffff' }, // Pulzující červená a bílá barva textu
        },
      },
      animation: {
        'pulse-red': 'pulseRed 2.5s ease-in-out infinite', // Definice animace
      },
    },
  },
  plugins: [],
};
export default config;
