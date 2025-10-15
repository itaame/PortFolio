import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#6366f1',
          foreground: '#ffffff'
        }
      },
      boxShadow: {
        soft: '0 20px 40px -24px rgba(15, 23, 42, 0.4)'
      }
    }
  },
  plugins: []
};

export default config;
