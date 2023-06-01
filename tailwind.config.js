/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito', 'sans-serif'],
				serif: ['Roboto Slab', 'serif']
			},
			keyframes: {
				cradle: {
					'0%': {
						transform: 'rotate(-5deg)'
					},
					'50%': {
						transform: 'rotate(5deg)'
					},
					'100%': {
						transform: 'rotate(-5deg)'
					}
				}
			},
			animation: {
				cradle: 'cradle 1.5s ease-in-out infinite'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
