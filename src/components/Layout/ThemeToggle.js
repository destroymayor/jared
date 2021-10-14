import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import useHasMounted from '@/hooks/utils/use-has-mounted.hook';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDarkTheme = hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

  const toggleTheme = () => setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

  return (
    <button
      className="flex items-center justify-center transition duration-200 ease-in-out bg-gray-300 rounded-lg cursor-pointer w-9 h-9 hover:ring-2 ring-gray-400 dark:bg-gray-600 hover:text-yellow-500 dark:hover:text-yellow-300"
      type="button"
      aria-label={`Activate ${isDarkTheme ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
    >
      {hasMounted && (
        <>{isDarkTheme ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}</>
      )}
    </button>
  );
};

export default ThemeToggle;
