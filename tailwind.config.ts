const svgToDataUri = require('mini-svg-data-uri');

const colors = require('tailwindcss/colors');
const {
	default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
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
				'2/3': '2 / 3',
			},
			minHeight: {
				'4/5': '4 / 5',
				'2/3': '2 / 3',
				'1/2': '1 / 2',
			},
			maxHeight: {
				'4/5': '4 / 5',
				'2/3': '2 / 3',
				'1/2': '1 / 2',
			},
			fontFamily: {
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
			  {
				"bg-grid": (value: any) => ({
				  backgroundImage: `url("${svgToDataUri(
					`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
				  )}")`,
				}),
				"bg-grid-small": (value: any) => ({
				  backgroundImage: `url("${svgToDataUri(
					`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
				  )}")`,
				}),
				"bg-dot": (value: any) => ({
				  backgroundImage: `url("${svgToDataUri(
					`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
				  )}")`,
				}),
			  },
			  { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		  },
	],
	daisyui: {
		themes: [
			{
				'mytheme-light': {
					text: '#184426',
					'base-100': '#eafff0',
					primary: '#7A3359',
					secondary: '#f2f2f2',
					accent: '#EB5957',
				},
				'mytheme-dark': {

					primary: '#F9F871',
					// secondary: '#B54A60', //light rose
					// secondary: '#7A3359',	//bordeaux to purple
					// secondary: '#00BFFF',	//light blue
					// secondary: '#FFA500',	//orange
					secondary: '#EB5780',	//rosaceo
					accent: '#42D780',
					neutral: '#dcfce7',
					info: '#22d3ee',
					success: '#0e715e',
					warning: '#f9a734',
					error: '#e11d48',
					tahiti: {
						100: '#205A32',
						200: '#337A54',
						300: '#184426',
						400: '#90D8A7',
						500: '#06b6d4',
						600: '#0891b2',
						700: '#0e7490',
						800: '#155e75',
						900: '#164e63',
					},
					'base-100': '#184426',
					'base-200': '#337A54',
					'base-300': '#205A32',
					'base-400': '#90D8A7',
					// 'pastel-green': '#c3dfba'
					// 'celadon': '#ACE1AF'
				},
			},
		],
		darkTheme: 'mytheme-dark',
	},
};


function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }