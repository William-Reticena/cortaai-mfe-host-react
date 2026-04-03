import type { Plugin } from 'vite';

export function spaFallback(): Plugin {
  return {
    name: 'spa-fallback',
    configureServer(server) {
      return () => {
        server.middlewares.use((req, _res, next) => {
          if (req.url && req.method === 'GET' && !req.url.includes('.') && !req.url.startsWith('/@') && !req.url.startsWith('/node_modules') && !req.url.startsWith('/src')) {
            req.url = '/index.html';
          }
          next();
        });
      };
    },
  };
}
