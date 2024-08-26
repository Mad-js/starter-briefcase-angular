/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1F1F1F',
          text: '#ffffff',
          primary: '#2D2648',
          secondary: '#EAEAEA',
          success: '#00f9b4',
          warning: '#cea400',
          error: '#ff948f'
        },
        light: {
          DEFAULT: '#FFF7FF',
          text: '#ffffff',
          primary: '#2D2648',
          secondary: '#00c6e4',
          success: '#00f9b4',
          warning: '#cea400',
          error: '#ff948f'
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
