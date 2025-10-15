import { HelmetProvider as BaseHelmetProvider } from 'react-helmet-async';
import type { PropsWithChildren } from 'react';

export function HelmetProvider({ children }: PropsWithChildren) {
  return <BaseHelmetProvider>{children}</BaseHelmetProvider>;
}
