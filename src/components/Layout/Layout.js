import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import CommandPalette from '@/components/CommandPalette';

export default function Layout(props) {
  const { children } = props;

  return (
    <div className="flex h-screen flex-col items-center bg-gray-50 text-gray-700 dark:bg-black dark:text-gray-300">
      <header className="flex w-11/12 items-center justify-between py-6 sm:max-w-[686px]">
        <Navigation />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CommandPalette />
        </div>
      </header>

      <main className="w-11/12 flex-grow pb-20 text-gray-700 dark:text-gray-300 sm:max-w-[686px]">
        {children}
      </main>
    </div>
  );
}
