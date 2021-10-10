import { memo } from 'react';

import Navigation from '@/components/Layout/Navigation/Navigation';
import ThemeToggle from '@/components/Layout/ThemeToggle';

const Header = () => {
  return (
    <header className="flex items-center justify-between flex-shrink-0 w-11/12 pt-8 pb-8 sm:pb-14 sm:max-w-2xl">
      <Navigation />
      <ThemeToggle />
    </header>
  );
};

export default memo(Header);
