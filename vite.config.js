import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3001,
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  test: {
    globals: true,
    include: ['src/**/*.test.js', 'src/**/*.test.jsx'],
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
  },
  build: {
    chunkSizeWarningLimit: 100000000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
