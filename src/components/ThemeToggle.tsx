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
      className="group h-10 w-10 rounded-full border border-transparent hover:border-accent"
    >
      <span
        aria-hidden="true"
        style={{
          WebkitMaskImage: `url(${iconSrc})`,
          maskImage: `url(${iconSrc})`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskPosition: 'center',
          maskPosition: 'center'
        }}
        className="h-5 w-5 bg-slate-600 transition-transform transition-colors group-hover:scale-110 group-hover:bg-accent dark:bg-slate-300 dark:group-hover:bg-accent"
      />
    </Button>
  );
}
