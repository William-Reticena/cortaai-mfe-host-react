import { useEffect, useRef } from 'react';

export default function VueMicroFrontend() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let remoteModule: any;
    let isMounted = true;

    async function load() {
      try {
        remoteModule = await import('cortaai_mfe_remote_vue/bootstrap');

        const vueMfe = remoteModule?.default ?? remoteModule;

        if (!isMounted || !containerRef.current) return;

        if (typeof vueMfe.mount !== 'function') {
          console.error('mount não encontrado no módulo remoto', vueMfe);
          return;
        }

        vueMfe.mount({
          container: containerRef.current,
        });
      } catch (error) {
        console.error('erro ao carregar remote vue', error);
      }
    }

    load();

    return () => {
      isMounted = false;

      const vueMfe = remoteModule?.default ?? remoteModule;

      if (vueMfe?.unmount) {
        vueMfe.unmount();
      }
    };
  }, []);

  return <div ref={containerRef} style={{ minHeight: 200, border: '1px solid blue' }} />;
}
