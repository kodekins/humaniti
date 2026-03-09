import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black:   '#050505',
        offwhite:'#f5f0e8',
        acid:    '#c8ff00',
        crimson: '#ff2d2d',
        gray:    '#1a1a1a',
        gray2:   '#2a2a2a',
        muted:   '#6b6b6b',
      },
      fontFamily: {
        head: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-dm)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        '10xl': '10rem',
        '12xl': '12rem',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'slide-in':  'slideIn 0.6s ease forwards',
        'fade-up':   'fadeUp 0.7s ease forwards',
        'chain':     'chainPulse 0.7s ease',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.7)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        chainPulse: {
          '0%':   { transform: 'scale(1)' },
          '50%':  { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse at 80% 20%, rgba(200,255,0,0.05) 0%, transparent 60%), linear-gradient(135deg, rgba(200,255,0,0.02) 0%, transparent 60%)',
        'acid-line': 'linear-gradient(to bottom, transparent, #c8ff00, transparent)',
      },
    },
  },
  plugins: [],
}

export default config
