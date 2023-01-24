import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import electron from 'vite-plugin-electron';
import renderer from 'vite-plugin-electron-renderer';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: '@emotion/react',
		}),
		renderer({
			nodeIntegration: true,
		}),
		svgr(),
		tsconfigPaths(),
	],
	base: process.env.IS_DEV === 'true' ? '/' : './',
	server: {
		port: 3000,
	},
});
