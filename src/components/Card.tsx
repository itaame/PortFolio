import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '../lib/utils';
import Tag from './Tag';

interface CardProps extends PropsWithChildren {
  title: string;
  description?: string;
  href?: string;
  tags?: string[];
  footer?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  href,
  tags,
  footer,
  className,
  children
}: CardProps) {
  const content = (
    <div className="flex h-full flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        {description && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>}
      </div>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
      {children}
      {footer && <div className="mt-auto border-t border-slate-200 pt-4 text-sm dark:border-slate-800">{footer}</div>}
    </div>
  );

  const baseClass = cn(
    'flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition dark:border-slate-800 dark:bg-slate-900',
    href && 'hover:-translate-y-1 hover:border-accent hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    className
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={baseClass}>
        {content}
      </a>
    );
  }

  return <div className={baseClass}>{content}</div>;
}
