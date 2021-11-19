import Navigation from '@/components/Layout/Navigation/Navigation';
import ThemeToggle from '@/components/Layout/ThemeToggle';

export default function Header() {
  return (
    <header className="flex items-center justify-between flex-shrink-0 w-11/12 pt-8 pb-6 sm:pb-14 sm:max-w-2xl ">
      <Navigation />
      <ThemeToggle />
    </header>
  );
}
