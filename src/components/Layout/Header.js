import clsx from 'clsx';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import CommandPalette from '@/components/CommandPalette';

export default function Header() {
  return (
    <header
      className={clsx(
        'm-6 flex w-11/12 items-center justify-between p-2 sm:max-w-[686px]',
        'rounded-xl bg-zinc-200 dark:bg-zinc-900'
      )}
    >
      <Navigation />
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <CommandPalette />
      </div>
    </header>
  );
}
