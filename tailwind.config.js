/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#09090f',
          900: '#11111a',
          800: '#181824',
        },
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
      },
      boxShadow: {
        glow: '0 20px 80px rgba(124, 58, 237, 0.28)',
        soft: '0 12px 40px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top left, rgba(139,92,246,0.22), transparent 30%), radial-gradient(circle at top right, rgba(168,85,247,0.18), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.95), rgba(245,243,255,0.88))',
        'hero-grid-dark':
          'radial-gradient(circle at top left, rgba(139,92,246,0.26), transparent 30%), radial-gradient(circle at top right, rgba(168,85,247,0.18), transparent 24%), linear-gradient(180deg, rgba(9,9,15,0.96), rgba(17,17,26,0.9))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(139, 92, 246, 0.35)' },
          '50%': { boxShadow: '0 0 0 14px rgba(139, 92, 246, 0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
