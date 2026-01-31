import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#1a1a1a',
        'gray-light': '#f5f5f5',
        'gray-dark': '#333333',
      },
      fontFamily: {
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
        english: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
