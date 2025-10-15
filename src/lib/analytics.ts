import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scriptId = 'plausible-script';

function injectScript(domain: string) {
  if (document.getElementById(scriptId)) return;
  const script = document.createElement('script');
  script.id = scriptId;
  script.defer = true;
  script.setAttribute('data-domain', domain);
  script.src = 'https://plausible.io/js/script.js';
  document.body.appendChild(script);
}

export function usePlausibleAnalytics() {
  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
    if (!domain) return;
    injectScript(domain);
  }, []);
}

export function usePageview() {
  const location = useLocation();
  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
    if (!domain) return;
    const plausible = (window as Window & typeof globalThis & { plausible?: (event: string, options?: Record<string, unknown>) => void }).plausible;
    plausible?.('pageview');
  }, [location.pathname, location.search]);
}
