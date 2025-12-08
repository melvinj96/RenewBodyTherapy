/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#11111F',
          dark: '#0a0a14',
        },
        secondary: {
          DEFAULT: '#FC902E',
          dark: '#d35400',
          light: '#e67e22',
        },
        accent: {
          green: '#4CAF50',
          blue: '#2196F3',
          orange: '#E67E22',
        },
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Libre Franklin', 'serif'],
        tertiary: ['Oswald', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'pulse-slow': 'pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      transitionDelay: {
        '1000': '1000ms',
        '2000': '2000ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

