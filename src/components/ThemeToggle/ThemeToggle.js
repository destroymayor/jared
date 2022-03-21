import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import useHasMounted from '@/hooks/use-has-mounted.hook';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDarkTheme = hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

  const toggleTheme = () => setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

  return (
    <button
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-zinc-300 ring-zinc-400 transition duration-200 ease-in-out hover:ring-2 dark:bg-zinc-800 dark:hover:ring-zinc-600 md:hidden"
      type="button"
      aria-label={`Activate ${isDarkTheme ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
    >
      {hasMounted && (
        <>{isDarkTheme ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}</>
      )}
    </button>
  );
}
