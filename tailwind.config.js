/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#172E41',
                    text: '#ffffff',
                    primary: '#1F1F1F',
                    secondary: '#EAEAEA',
                    success: '#00f9b4',
                    warning: '#cea400',
                    error: '#ff948f'
                },
                light: {
                    DEFAULT: '#FFF7FF',
                    text: '#ffffff',
                    primary: '#FFF7FF',
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