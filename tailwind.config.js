/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFAF7',
          100: '#FAF6F0',
          200: '#F5ECE1',
          300: '#EFE2D2',
        },
        ivory: '#FFFDF9',
        blush: {
          50: '#FDF9F8',
          100: '#FAF1EF',
          200: '#F5E3E0',
          300: '#ECCDC6',
          400: '#DFB0A5',
          500: '#CD8F82',
          600: '#B87263',
          700: '#965A4E',
          800: '#7C4B41',
          900: '#673F37',
        },
        nude: {
          50: '#FAF8F5',
          100: '#F4EFE8',
          200: '#EAE1D4',
          300: '#DCCDBB',
          400: '#C8B29C',
          500: '#B29780',
          600: '#997D67',
          700: '#7D6453',
          800: '#655042',
          900: '#524136',
        },
        rose: {
          brown: '#875146',
          dark: '#693B32',
          muted: '#A27066',
          gold: '#C99D8B',
        },
        espresso: {
          50: '#F7F6F5',
          100: '#ECE9E6',
          200: '#D8D3CE',
          300: '#B8AFA7',
          400: '#8A7E74',
          500: '#665B52',
          600: '#4F453E',
          700: '#3D342E',
          800: '#2A221D',
          900: '#1D1612',
          950: '#120D0B',
        },
        gold: {
          soft: '#E6D5B8',
          accent: '#CCA45B',
          warm: '#BA8D44',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(42, 34, 29, 0.05)',
        'card': '0 10px 30px -4px rgba(42, 34, 29, 0.08)',
        'elevated': '0 20px 40px -10px rgba(42, 34, 29, 0.12)',
        'glow': '0 0 25px rgba(223, 176, 165, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
