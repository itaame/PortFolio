const normalizePath = (value: string) => value.replace(/^\/+/, '');

export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL ?? '/';
  const candidate = normalizePath(path);

  try {
    return new URL(candidate, base).toString();
  } catch (error) {
    if (typeof window !== 'undefined' && window.location?.origin) {
      return new URL(candidate, `${window.location.origin}${base}`).toString();
    }
    const prefix = base.endsWith('/') ? base : `${base}/`;
    return `${prefix}${candidate}`.replace(/\/+/g, '/');
  }
};
