import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '../lib/utils';
import Tag from './Tag';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  meta: string;
  badges?: string[];
  children?: ReactNode;
}

export function TimelineItem({ title, subtitle, meta, badges, children }: TimelineItemProps) {
  return (
    <li className="relative pl-8 sm:pl-10">
      <span
        className="absolute left-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-accent shadow-sm dark:border-slate-950"
        aria-hidden
      />
      <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-300">{subtitle}</p>
          </div>
          <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{meta}</span>
        </div>
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Tag key={badge} variant="accent">
                {badge}
              </Tag>
            ))}
          </div>
        )}
        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">{children}</div>
      </div>
    </li>
  );
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export default function Timeline({ children, className }: PropsWithChildren<TimelineProps>) {
  return (
    <ol className={cn('relative border-l border-slate-200 dark:border-slate-800', className)}>{children}</ol>
  );
}
