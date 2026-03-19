import { useEffect, useRef } from 'react';

export default function ReactMicroFrontend() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let remoteModule: any;
    let isMounted = true;

    async function load() {
      try {
        remoteModule = await import('cortaai_mfe_remote_react/bootstrap');

        const mfe = remoteModule?.default ?? remoteModule;

        if (!isMounted || !containerRef.current) return;

        if (typeof mfe.mount !== 'function') {
          console.error('mount não encontrado no módulo remoto', mfe);
          return;
        }

        mfe.mount({
          container: containerRef.current,
        });
      } catch (error) {
        console.error('erro ao carregar remote react', error);
      }
    }

    load();

    return () => {
      isMounted = false;

      const mfe = remoteModule?.default ?? remoteModule;

      if (mfe?.unmount) {
        mfe.unmount();
      }
    };
  }, []);

  return <div ref={containerRef} style={{ minHeight: 200, border: '1px solid red' }} />;
}
