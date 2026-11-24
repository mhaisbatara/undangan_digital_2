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
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        dusty: {
          50: '#f4f7f9',
          100: '#e7eef2',
          200: '#d3dfe6',
          300: '#b4c9d5',
          400: '#8baec0',
          500: '#6b93aa',
          600: '#567a92', // Reference color
          700: '#466479',
          800: '#3c5364',
          900: '#354754',
          950: '#212d37',
        },
        lavender: {
          50: '#fbf8fd',
          100: '#f6effb',
          200: '#eddff6',
          300: '#dfc5ee',
          400: '#c89fe1',
          500: '#b079d1',
          600: '#9757be',
          700: '#7f41a3',
          800: '#6a3686',
          900: '#582d6e',
          950: '#3b184e',
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(86, 122, 146, 0.12)',
        'glow': '0 0 40px rgba(255, 255, 255, 0.65)',
        'glow-lavender': '0 0 35px rgba(223, 197, 238, 0.45)',
      },
      animation: {
        'bounce-slow': 'bounce 2.2s infinite ease-in-out',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
