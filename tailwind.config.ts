import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',   // Pokud používáš složku pages
    './styles/**/*.css',               // Zahrni CSS soubory
    './**/*.{js,ts,jsx,tsx,mdx}'                           // Pokud máte vlastní CSS soubory
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
