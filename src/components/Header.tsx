import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import socials from '../data/socials.json';
import ThemeToggle from './ThemeToggle';
import { prefetchRoute } from '../lib/utils';
import { loadAbout, loadContact, loadExperience, loadProjects, loadPublications } from '../routes/lazy';

const navItems = [
  { to: '/', label: 'Home', prefetch: undefined },
  { to: '/about', label: 'About', prefetch: () => prefetchRoute('about', loadAbout) },
  { to: '/projects', label: 'Projects', prefetch: () => prefetchRoute('projects', loadProjects) },
  { to: '/experience', label: 'Experience', prefetch: () => prefetchRoute('experience', loadExperience) },
  { to: '/publications', label: 'Publications', prefetch: () => prefetchRoute('publications', loadPublications) },
  { to: '/contact', label: 'Contact', prefetch: () => prefetchRoute('contact', loadContact) }
];

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  profile: {
    name: string;
    headline: string;
    avatar: string;
  };
}

export default function Header({ theme, onThemeChange, profile }: HeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/70 pt-[env(safe-area-inset-top)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" aria-label="Go to home">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-10 w-10 rounded-full border border-slate-200 object-cover dark:border-slate-700"
            loading="lazy"
            decoding="async"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{profile.name}</span>
            <span className="text-xs text-slate-500 dark:text-slate-300">{profile.headline}</span>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-600 hover:text-accent dark:text-slate-300'
                }`
              }
              onMouseEnter={item.prefetch}
              onFocus={item.prefetch}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle theme={theme} onChange={onThemeChange} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700 dark:text-slate-100 sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-nav"
        className={`grid overflow-hidden transition-all sm:hidden ${
          open ? 'grid-rows-[1fr] border-t border-slate-200 dark:border-slate-800' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 space-y-4 bg-white px-4 py-4 dark:bg-slate-950">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-accent dark:text-slate-300 dark:hover:bg-slate-900'
                }`
              }
              onMouseEnter={item.prefetch}
              onFocus={item.prefetch}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
