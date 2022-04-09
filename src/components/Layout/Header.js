import clsx from 'clsx';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import CommandPalette from '@/components/CommandPalette';

export default function Header() {
  return (
    <header className={clsx('flex w-11/12 items-center justify-between py-8 sm:max-w-[686px]')}>
      <Navigation />
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <CommandPalette />
      </div>
    </header>
  );
}
