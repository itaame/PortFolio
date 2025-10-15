export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

const prefetched = new Set<string>();

export function prefetchRoute(key: string, loader: () => Promise<unknown>): void {
  if (prefetched.has(key)) return;
  prefetched.add(key);
  void loader();
}

export function formatDateRange(start: string, end?: string): string {
  if (!end || end.toLowerCase() === 'present') {
    return `${start} — Present`;
  }
  return `${start} — ${end}`;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function getBuildTime(): string {
  const now = new Date();
  return now.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  });
}
