'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@/components/Icons';
import useHasMounted from '@/hooks/use-has-mounted.hook';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDarkTheme = hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

  const toggleTheme = () => setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

  if (!hasMounted) return null;

  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-lg ring-zinc-400 transition duration-200 ease-in-out hover:ring-2 focus:outline-none dark:hover:ring-zinc-600"
      type="button"
      aria-label={`Activate ${isDarkTheme ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
    >
      {hasMounted && <span className="h-6 w-6">{isDarkTheme ? <SunIcon /> : <MoonIcon />}</span>}
    </button>
  );
}
