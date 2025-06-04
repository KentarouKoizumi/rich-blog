import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './posts/**/*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
