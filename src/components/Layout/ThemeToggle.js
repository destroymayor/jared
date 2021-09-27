import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import useHasMounted from '@/hooks/utils/use-has-mounted.hook';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDarkTheme = hasMounted && (theme === 'dark' || theme === 'system');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button
      className="justify-center text-black transition duration-200 ease-in-out cursor-pointer dark:text-gray-100 hover:text-yellow-500 dark:hover:text-yellow-300"
      aria-label={`Activate ${isDarkTheme ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
    >
      {isDarkTheme ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;
