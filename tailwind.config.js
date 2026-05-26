/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0F172A',
          secondary: '#1E293B',
          card: '#334155',
        },
        accent: {
          DEFAULT: '#38BDF8',
          hover: '#0EA5E9',
        },
        content: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
        },
        success: '#22C55E',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        display: ['3rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(15, 23, 42, 0.45)',
        glass: '0 8px 32px rgba(15, 23, 42, 0.55)',
        glow: '0 0 80px rgba(56, 189, 248, 0.12)',
        card: '0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.35)',
        'card-hover':
          '0 0 0 1px rgba(56, 189, 248, 0.25), 0 20px 50px rgba(0,0,0,0.45)',
      },
      backdropBlur: {
        glass: '20px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-premium':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.18), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(14, 165, 233, 0.12), transparent), radial-gradient(ellipse 50% 30% at 0% 100%, rgba(56, 189, 248, 0.08), transparent)',
      },
      animation: {
        'float-slow': 'float 18s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(2%, -1%) scale(1.02)' },
          '66%': { transform: 'translate(-1%, 1%) scale(0.98)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
