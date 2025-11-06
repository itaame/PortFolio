import { Button } from './Form';

type Theme = 'light' | 'dark';

interface ThemeToggleProps {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

export default function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  // ✅ swapped: light → "Dark Theme", dark → "Light Theme"
  const label = isDark ? 'Light Theme' : 'Dark Theme';

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={() => onChange(isDark ? 'light' : 'dark')}
      aria-pressed={isDark}
      aria-label={`Activate ${isDark ? 'light' : 'dark'} theme`}
      className="
        h-10 w-24 rounded-full
        border border-slate-400
        text-slate-700 dark:text-slate-200
        hover:border-accent
        flex items-center justify-center text-xs
      "
    >
      {label}
    </Button>
  );
}
