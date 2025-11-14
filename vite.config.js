import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
    },
  },
  optimizeDeps: {
    include: ['buffer'],
  },
  build: {
    rollupOptions: {
      plugins: [
        rollupNodePolyFill(),
      ],
    },
  },
});