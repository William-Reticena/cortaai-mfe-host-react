import { useMicroFrontend } from '../hooks/useMicroFrontend';

export default function ReactMicroFrontend() {
  const containerRef = useMicroFrontend({ 
    loader: () => import('cortaai_mfe_remote_react/bootstrap'),
    name: 'React MFE'
  });

  return <div ref={containerRef} style={{ minHeight: 200, border: '1px solid red' }} />;
}
