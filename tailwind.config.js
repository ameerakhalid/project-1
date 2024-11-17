/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dbefe2',
          200: '#bde0cc',
          300: '#92c9ac',
          400: '#64ab85',
          500: '#448f69',
          600: '#337254',
          700: '#2a5b44',
          800: '#254a38',
          900: '#1e3d2f',
        },
        navy: {
          50: '#f0f3f8',
          100: '#dae1ed',
          200: '#bcc8de',
          300: '#93a7cb',
          400: '#6683b5',
          500: '#4a669c',
          600: '#3b5182',
          700: '#324269',
          800: '#2b3757',
          900: '#1a2236',
        },
      },
    },
  },
  plugins: [],
};