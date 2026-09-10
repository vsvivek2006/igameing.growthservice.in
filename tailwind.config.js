/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070B14', // Deep Obsidian Background
          900: '#0B1120', // Atmospheric Hero Background
          850: '#0E172A', // Elevated Dark Surface
          800: '#131D33', // Card Surface Dark
          700: '#1E293B', // Border Dark Surface
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#6A0DAD', // Royal Purple - Primary (Brand Locked)
          700: '#7c3aed', // Bright Violet Accent
          800: '#6b21a8',
          900: '#581c87', // Deep Royal Shadow
        },
        yellow: {
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#FFD700', // Gold - Secondary (Brand Locked)
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        green: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#25D366', // Action Green (Brand Locked)
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-light': 'bounce 2s infinite',
        'pulse-light': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(106, 13, 173, 0.3)',
        'glow-lg': '0 0 40px rgba(106, 13, 173, 0.4)',
        'glow-purple-sm': '0 0 15px rgba(124, 58, 237, 0.3)',
        'glow-gold-sm': '0 0 15px rgba(245, 158, 11, 0.25)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 20px 35px -4px rgba(106, 13, 173, 0.12), 0 8px 16px -2px rgba(15, 23, 42, 0.04)',
        'card-dark': '0 4px 24px -2px rgba(0, 0, 0, 0.4), 0 2px 8px -2px rgba(0, 0, 0, 0.3)',
        'card-dark-hover': '0 16px 40px -4px rgba(106, 13, 173, 0.25), 0 4px 16px -2px rgba(0, 0, 0, 0.4)',
        'inner-soft': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
};
