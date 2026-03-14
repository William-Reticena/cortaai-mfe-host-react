import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
});
