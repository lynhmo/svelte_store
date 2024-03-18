import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite'
export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({ compiler: 'svelte', })
	],
	server: {
		proxy: {
			'/v1/api': 'http://localhost:8080',
		},
	},
});
