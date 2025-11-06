import { Button } from './Form';

type Theme = 'light' | 'dark';

interface ThemeToggleProps {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

export default function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const assetBase = import.meta.env.BASE_URL;
  const iconSrc = `${assetBase}assets/icons/${isDark ? 'theme-dark' : 'theme-light'}.svg`;

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={() => onChange(isDark ? 'light' : 'dark')}
      aria-pressed={isDark}
      aria-label={`Activate ${isDark ? 'light' : 'dark'} theme`}
      className="h-10 w-10 rounded-full border border-transparent hover:border-accent"
    >
      <img src={iconSrc} alt="" className="h-5 w-5" loading="lazy" decoding="async" aria-hidden="true" />
    </Button>
  );
}
