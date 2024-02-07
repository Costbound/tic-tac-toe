import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id: any) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'index.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html']), react()],
    base: '/tic-tac-toe/'
  };
});
