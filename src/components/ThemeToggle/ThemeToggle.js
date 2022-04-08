import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import useHasMounted from '@/hooks/use-has-mounted.hook';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDarkTheme = hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

  const toggleTheme = () => setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

  return (
    <button
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg bg-zinc-100 ring-zinc-400 transition duration-200 ease-in-out hover:ring-2 dark:bg-zinc-800 dark:hover:ring-zinc-600 md:h-10 md:w-10"
      type="button"
      aria-label={`Activate ${isDarkTheme ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
    >
      {hasMounted && (
        <span className="h-8 w-8 md:h-6 md:w-6">{isDarkTheme ? <SunIcon /> : <MoonIcon />}</span>
      )}
    </button>
  );
}
