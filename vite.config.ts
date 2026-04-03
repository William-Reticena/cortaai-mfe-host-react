import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import federation from '@originjs/vite-plugin-federation';
import { resolve } from 'path';

import { spaFallback } from './src/configs/plugins/spaFallback';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spaFallback(),
    federation({
      name: 'react-app',
      remotes: {
        cortaai_mfe_remote_vue: 'http://localhost:9001/assets/remoteEntry.js',
        cortaai_mfe_remote_react: 'http://localhost:9002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 9000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
