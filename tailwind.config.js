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
			aspectRatio: { 
                '4/5': '4 / 5', 
                '2/3': '2 / 3'
            },
			minHeight: { 
                '4/5': '4 / 5',
                '2/3': '2 / 3',
                '1/2': '1 / 2'
            },
			maxHeight: { 
                '4/5': '4 / 5',
                '2/3': '2 / 3',
                '1/2': '1 / 2'
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
              },
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				'mytheme-dark': {
					primary: '#F9F871',
					secondary: '#CC8BB8',
					accent: '#42D780',
					neutral: '#dcfce7',
					info: '#22d3ee',
					success: '#0e715e',
					warning: '#f9a734',
					error: '#e11d48',
					tahiti: {
						100: '#184426',
						200: '#205A32',
						300: '#337A54',
						400: '#90D8A7',
						500: '#06b6d4',
						600: '#0891b2',
						700: '#0e7490',
						800: '#155e75',
						900: '#164e63',
					},
					'base-100': '#184426',
					'base-200': '#205A32',
					'base-300': '#337A54',
					'base-400': '#90D8A7',
					// 'pastel-green': '#c3dfba'
					// 'celadon': '#ACE1AF'
				},
			},
		],
		darkTheme: 'mytheme-dark',
	},
};
