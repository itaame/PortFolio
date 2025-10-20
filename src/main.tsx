import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { HelmetProvider } from './providers/HelmetProvider';
import { HashRouter } from 'react-router-dom';

const basename = (() => {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  if (!baseUrl.startsWith('/')) {
    return '/';
  }
  const normalized = baseUrl.replace(/\/+$/, '');
  return normalized === '' ? '/' : normalized;
})();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      const basename = import.meta.env.BASE_URL;
      <HashRouter>
        <App />
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);
