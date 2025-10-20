import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { HelmetProvider } from './providers/HelmetProvider';

const basename = (() => {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  const url = new URL(baseUrl, window.location.href);
  const normalized = url.pathname.replace(/\/+$/, '');
  return normalized === '' ? '/' : normalized;
})();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
