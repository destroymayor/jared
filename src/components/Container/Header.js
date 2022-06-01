import { HexagonIcon } from '@/components/FeatherIcons';

import Link from '@/components/Link';

import DesktopNav from '@/components/DesktopNav';
import MobileNav from '@/components/MobileNav';

import ThemeToggle from '@/components/ThemeToggle';
import BgmPlayer from '@/components/BgmPlayer';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between py-6 px-5 md:px-12">
      <div className="flex items-center gap-4">
        <Link href="/" className="relative">
          <HexagonIcon className="h-10 w-10 transition duration-300 ease-in-out" />
          <span className="absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)]">J</span>
        </Link>

        <DesktopNav />
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <ThemeToggle />
        <BgmPlayer />
      </div>

      <MobileNav />
    </header>
  );
}
