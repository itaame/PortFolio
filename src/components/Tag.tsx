import type { PropsWithChildren } from 'react';
import { cn } from '../lib/utils';

interface TagProps {
  variant?: 'default' | 'accent';
  className?: string;
}

export default function Tag({ children, variant = 'default', className }: PropsWithChildren<TagProps>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors',
        variant === 'accent'
          ? 'border-transparent bg-accent text-white shadow-soft'
          : 'border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200',
        className
      )}
    >
      {children}
    </span>
  );
}
