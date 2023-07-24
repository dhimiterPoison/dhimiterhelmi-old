/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            'lemonade',
            'forest',
            {
                'mytheme-dark': {
                    primary: '#F9F871',
                    secondary: '#CC8BB8',
                    accent: '#42D780',
                    neutral: '#dcfce7',
                    'base-100': '#184426',
                    'base-200': '#205A32',
                    'base-300': '#337A54',
                    info: '#22d3ee',
                    success: '#0e715e',
                    warning: '#f9a734',
                    error: '#e11d48',
                },
            },
        ],
        darkTheme: 'mytheme-dark',
    },
};
