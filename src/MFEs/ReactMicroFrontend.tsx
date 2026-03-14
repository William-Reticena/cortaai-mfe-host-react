import { useEffect, useRef } from 'react';

export default function ReactMicroFrontend() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let remoteModule: any;
    let isMounted = true;

    async function load() {
      try {
        console.log('antes do import react remote');

        remoteModule = await import('cortaai_mfe_remote_react/bootstrap');

        console.log('remoteModule', remoteModule);
        console.log('remoteModule.mount', remoteModule?.mount);
        console.log('remoteModule.default?.mount', remoteModule?.default?.mount);

        const mfe = remoteModule?.default ?? remoteModule;

        if (!isMounted || !containerRef.current) return;

        if (typeof mfe.mount !== 'function') {
          console.error('mount não encontrado', mfe);
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
      mfe?.unmount?.();
    };
  }, []);

  return <div ref={containerRef} style={{ minHeight: 200, border: '1px solid red' }} />;
}
