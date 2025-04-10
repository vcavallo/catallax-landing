/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts,md}', './docs/**/*.md'],

	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class'
};
