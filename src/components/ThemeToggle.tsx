import { Button } from './Form';

type Theme = 'light' | 'dark';
const THEME_ICONS: Record<Theme, string> = {
  light: '/assets/icons/theme-light.svg',
  dark: '/assets/icons/theme-dark.svg'
};

interface ThemeToggleProps {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

export default function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const iconSrc = THEME_ICONS[theme];

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={() => onChange(isDark ? 'light' : 'dark')}
      aria-pressed={isDark}
      aria-label={`Activate ${isDark ? 'light' : 'dark'} theme`}
      className="h-10 w-10 rounded-full border border-transparent text-slate-600 hover:border-accent dark:text-slate-300"
    >
      <Icon
        className="h-5 w-5 text-slate-600 transition-colors group-hover:text-accent dark:text-slate-300"
        aria-hidden="true"
        focusable="false"
      />
    </Button>
  );
}
