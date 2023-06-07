import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@ui': path.resolve(__dirname, './src/components/ui'),
			'@apply': path.resolve(__dirname, './src/components/apply'),
			'@question': path.resolve(__dirname, './src/components/question'),
		},
	},
});
