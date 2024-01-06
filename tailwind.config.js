/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				newblack: {
					900: '#1b1a1e',
				},
				grass: {
					500: '#40BD77',
				},
			},
		},
		fontFamily: {
			sans: ['"Figtree"'],
		},
	},
	plugins: [],
	darkMode: 'class',
};
