import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Pokud používáte složku app, tohle by mělo stačit
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Pokud používáte složku components
    "./styles/**/*.css",                   // Pokud máte vlastní CSS soubory
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
