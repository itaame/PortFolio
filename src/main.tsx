import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter /*, HashRouter */ } from 'react-router-dom';
import App from './App';
import './index.css';
import { HelmetProvider } from './providers/HelmetProvider';

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
