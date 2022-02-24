import Navigation from '@/components/Layout/Navigation/Navigation';
import CommandPalette from '@/components/Layout/CommandPalette';
import ThemeToggle from '@/components/Layout/ThemeToggle';

export default function Header() {
  return (
    <header className="flex w-11/12 flex-shrink-0 items-center justify-between pt-8 pb-6 sm:max-w-2xl sm:pb-14 ">
      <Navigation />
      <div className="flex items-center gap-2">
        <CommandPalette />
        <ThemeToggle />
      </div>
    </header>
  );
}
