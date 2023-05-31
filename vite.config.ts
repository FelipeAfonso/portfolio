import { sveltekit } from '@sveltejs/kit/vite';

export default {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		port: 3000
	}
};
