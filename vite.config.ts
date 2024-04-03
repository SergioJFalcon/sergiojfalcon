import { resolve } from 'path';
// import devtools from 'solid-devtools/vite';
import { DOMElements, SVGElements } from 'solid-js/web/dist/dev.cjs';
import { defineConfig } from 'vite';
import inspect from 'vite-plugin-inspect';
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
	resolve: {
		alias: {
			'@interfaces': resolve(__dirname, './src/interfaces'),
			'@components': resolve(__dirname, './src/components'),
			'@routes': resolve(__dirname, './src/routes'),
			'@pages': resolve(__dirname, './src/pages'),
			'@styles': resolve(__dirname, './src/styles'),
			'@config': resolve(__dirname, './src/config'),
			'@src': resolve(__dirname, './src'),
			'@assets': resolve(__dirname, './src/assets'),
			'@hooks': resolve(__dirname, './src/utils/hooks'),
      '@screens': resolve(__dirname, './src/screens'),
			'@store': resolve(__dirname, './src/store'),
			'@static': resolve(__dirname, './src/static'),
			'@utils': resolve(__dirname, './src/utils'),
		},
	},
  assetsInclude: ['**/*.glb', '**/*.gltf'],
	plugins: [
		/* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
		// devtools(),
		solidPlugin({
			solid: {
				moduleName: 'solid-js/web',
				generate: 'universal',
				renderers: [
					{
						name: 'dom',
						moduleName: 'solid-js/web',
						elements: [...DOMElements.values(), ...SVGElements.values()],
					},
					{
						name: 'universal',
						moduleName: 'solid-three',
						elements: [],
					},
				],
			},
		}),
		inspect(),
	],
	server: {
		port: 3000,
    host: true,
    strictPort: true,
		watch: {
			usePolling: true,
		},
	},
	build: {
		target: 'esnext',
	},
});
