const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					100: '#fde6e9',
					200: '#fbd0d9',
					300: '#f7aab9',
					400: '#f27a93',
					500: '#e63f66',
					600: '#d42a5b',
					700: '#b21e4b',
					800: '#951c45',
					900: '#801b40',
					950: '#470a1f'
				}
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;
