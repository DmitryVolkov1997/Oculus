/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'slate-grey': '#5C5C5E',
				'soft-lavender': '#F6F4F5',
			},

			backgroundImage: {
				'top-bg': "url('/src/assets/images/top-bg.jpg')",
				'content-bg': "url('/src/assets/images/content-bg.jpg')",
				'content-bg2': "url('/src/assets/images/content-bg2.jpg')",
				promo: "url('/src/assets/images/promo.jpg')",
			},
		},

		fontFamily: {
			helvetica: ['Helvetica', 'system-ui', 'Arial'],
			'helvetica-bold': ['Helvetica-Bold', 'system-ui', 'Arial'],
			sans: ['Inter', ' sans-serif'],
		},
	},
	plugins: [],
}
