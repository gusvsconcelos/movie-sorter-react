/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        brute: '4px 4px 0 rgb(0 0 0)',
      },
      boxShadow: {
        brute: '4px 4px 0 rgb(0 0 0)',
        header: '0 2px 0 rgb(0 0 0)',
        button: '3px 3px 0 rgb(0 0 0)',
      },
      fontFamily: {
        title: ['Big Shoulders Display', 'sans-serif'],
        ui: ['Archivo Narrow', 'sans-serif'],
        bolder: ['Bebas Neue', 'monospace'],
      },
      colors: {
        violet: {
          100: '#A5B4FB',
          200: '#A8A6FF',
          300: '#918efa',
          400: '#807dfa',
        },
        pink: {
          200: '#FFA6F6',
          300: '#fa8cef',
          400: '#fa7fee',
        },
        red: {
          200: '#FF9F9F',
          300: '#fa7a7a',
          400: '#f76363',
        },
        orange: {
          200: '#FFC29F',
          300: '#FF965B',
          400: '#fa8543',
        },
        yellow: {
          200: '#FFF59F',
          300: '#FFF066',
          400: '#FFE500',
        },
        lime: {
          100: '#c6fab4',
          200: '#B8FF9F',
          300: '#9dfc7c',
          400: '#7df752',
        },
        cyan: {
          200: '#A6FAFF',
          300: '#79F7FF',
          400: '#53f2fc',
        },
      },
    },
  },
  plugins: [],
};
