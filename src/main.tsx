import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { userDataCacheService } from './shared/services'
import './index.css'
import App from './App.tsx'

// Expor o bridge globalmente para MFEs em modo dev
if (import.meta.env.DEV) {
  (window as any).__REACT_APP_BRIDGE__ = {
    userDataCacheService,
  };
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
