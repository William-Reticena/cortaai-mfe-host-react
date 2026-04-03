import { useMicroFrontend } from '../hooks/useMicroFrontend';

export default function VueMicroFrontend() {
  const containerRef = useMicroFrontend({ 
    loader: () => import('cortaai_mfe_remote_vue/bootstrap'),
    name: 'Vue MFE'
  });

  return <div ref={containerRef} style={{ minHeight: 200, border: '1px solid blue' }} />;
}
