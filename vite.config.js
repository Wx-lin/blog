import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import WindiCSS from 'vite-plugin-windicss';

const isDev = process.env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', 
  plugins: [
    react(),
    WindiCSS(),
    viteMockServe({
      mockPath: 'mock',
      localEnbled: isDev,
      prodEnabled: !isDev,
      supports: false,
      watchFiles: true,
      injectCode: `
    import { setupProdMockServer } from './mockProdServer';
    setupProdMockServer();
    `,
      injectFile: path.resolve(process.cwd(), 'src/index.jsx'),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: '8081',
  },
});
