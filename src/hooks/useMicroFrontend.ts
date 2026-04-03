import { useEffect, useRef } from 'react';

interface MicroFrontendModule {
  mount?: (options: { container: HTMLElement }) => void;
  unmount?: () => void;
}

interface UseMicroFrontendOptions {
  loader: () => Promise<any>;
  name?: string;
}

export function useMicroFrontend({ loader, name = 'MFE' }: UseMicroFrontendOptions) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mfeModule: MicroFrontendModule | undefined;
    let isMounted = true;

    async function load() {
      try {
        const imported = await loader();

        const mfe: MicroFrontendModule = imported?.default ?? imported;

        if (!isMounted || !containerRef.current) return;

        if (typeof mfe.mount !== 'function') {
          console.error(`mount não encontrado no módulo remoto ${name}`, mfe);
          return;
        }

        mfe.mount({
          container: containerRef.current,
        });

        mfeModule = mfe;
      } catch (error) {
        console.error(`Erro ao carregar remote ${name}:`, error);
      }
    }

    load();

    return () => {
      isMounted = false;

      if (mfeModule?.unmount) {
        mfeModule.unmount();
      }
    };
  }, [loader, name]);

  return containerRef;
}
