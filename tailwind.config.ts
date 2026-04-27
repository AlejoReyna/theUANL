import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: { extend: { colors: { siase: { navy: '#102a43', blue: '#2563eb', cyan: '#0891b2', green: '#15803d', amber: '#b45309', red: '#b91c1c' } } } },
  plugins: []
} satisfies Config;
