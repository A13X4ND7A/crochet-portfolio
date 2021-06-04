module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#F0F1F0',
					dark: '#000000',
				},
				crochetGreen: {
					light: '#A4C77A',
					dark: '#3B531E',
				},
				brown: {
					DEFAULT: '#7B5D1F',
				},
				terracotta: {
					DEFAULT: '#e07a5f',
					dark: '#ed5d35',
				},
				'greenSheen': '#81b29a',
				'blueGrey': '#3D405B',
				'deepChampagne': '#f2cc8f',
				'eggShell': '#f4f1de',
			},
			fontFamily: ['Montserrat'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
