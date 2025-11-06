import { ComponentPropsWithoutRef } from 'react';

import { Button } from './Form';

type IconProps = ComponentPropsWithoutRef<'svg'>;

const ThemeLightIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414"
    />
  </svg>
);

const ThemeDarkIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
    />
  </svg>
);

type Theme = 'light' | 'dark';

interface ThemeToggleProps {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

export default function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const Icon = isDark ? ThemeDarkIcon : ThemeLightIcon;

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={() => onChange(isDark ? 'light' : 'dark')}
      aria-pressed={isDark}
      aria-label={`Activate ${isDark ? 'light' : 'dark'} theme`}
      className="h-10 w-10 rounded-full border border-transparent hover:border-accent"
    >
      <Icon className="h-5 w-5" />
    </Button>
  );
}
