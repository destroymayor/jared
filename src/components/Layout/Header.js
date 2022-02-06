import Navigation from '@/components/Layout/Navigation/Navigation';
import ThemeToggle from '@/components/Layout/ThemeToggle';

export default function Header() {
  return (
    <header className="flex w-11/12 flex-shrink-0 items-center justify-between pt-8 pb-6 sm:max-w-2xl sm:pb-14 ">
      <Navigation />
      <ThemeToggle />
    </header>
  );
}
