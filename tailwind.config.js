/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(99, 102, 241, 0.3)',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      colors: {
        dark: '#0A0A0A',
        panel: '#141414',
        border: '#262626',
        muted: '#A1A1AA',
        accent: {
          1: '#6366F1',
          2: '#8B5CF6',
          3: '#EC4899',
        },
      },
    },
  },
  plugins: [],
}
