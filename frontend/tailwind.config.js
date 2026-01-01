
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        surface: '#111827', // slate-900
        primary: '#3b82f6', // blue-500
        secondary: '#10b981', // emerald-500
      },
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '30': '7.5rem', // 120px
      },
      borderRadius: {
        'card': '12px',
        'card-lg': '18px',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.25)',
        'glow-success': '0 0 40px rgba(16, 185, 129, 0.15)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
