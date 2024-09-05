import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',     // Soubory v app složce
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Komponenty
    './pages/**/*.{js,ts,jsx,tsx}',       // Pokud používáš pages
    './styles/**/*.css',                  // CSS soubory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        pulseRed: {
          '0%, 100%': { backgroundColor: 'transparent', color: '#0e7490' },
          '50%': { backgroundColor: '#f87171', color: '#ffffff' },
        },
      },
      animation: {
        'pulse-red': 'pulseRed 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
