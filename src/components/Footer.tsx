import { NavLink } from 'react-router-dom';
import { getBuildTime } from '../lib/utils';

interface FooterProps {
  name: string;
  year: number;
}

const quickLinks = [
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/publications', label: 'Publications' },
  { to: '/contact', label: 'Contact' }
];

export default function Footer({ name, year }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-10 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">© {year} {name}</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Last build: {getBuildTime()}</p>
        </div>
        <nav className="flex flex-wrap gap-4">
          {quickLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="hover:text-accent">
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
}
