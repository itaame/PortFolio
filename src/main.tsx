import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter /*, HashRouter */ } from 'react-router-dom';
import App from './App';
import './index.css';
import { HelmetProvider } from './providers/HelmetProvider';

const redirectKey = 'portfolio:redirect';

if (typeof window !== 'undefined') {
  try {
    const pendingRedirect = window.sessionStorage.getItem(redirectKey);
    if (pendingRedirect) {
      window.sessionStorage.removeItem(redirectKey);
      const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (pendingRedirect !== current) {
        window.history.replaceState(null, '', pendingRedirect);
      }
    }
  } catch (error) {
    // If sessionStorage is unavailable (e.g. private mode), skip restoring the redirect.
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      {/* Switch to HashRouter below if a path-based deployment ever misbehaves. */}
      {/* <HashRouter> */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
      {/* </HashRouter> */}
    </HelmetProvider>
  </React.StrictMode>
);
