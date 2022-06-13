import { HexagonIcon } from '@/components/FeatherIcons';

import Link from '@/components/Link';

import DesktopNav from '@/components/DesktopNav';
import MobileNav from '@/components/MobileNav';

import ThemeToggle from '@/components/ThemeToggle';
import BgmPlayer from '@/components/BgmPlayer';

export default function Header() {
  return (
    <header className="relative flex w-full items-center justify-between px-5 py-6 md:px-12">
      <div className="flex items-center gap-4">
        <Link href="/" className="relative">
          <HexagonIcon className="h-10 w-10" />
          <span className="absolute top-1/2 left-1/2 font-bold [transform:translate(-50%,-50%)]">
            J
          </span>
        </Link>
      </div>

      <DesktopNav />

      <div className="hidden items-center gap-2 md:flex">
        <ThemeToggle />
        <BgmPlayer />
      </div>

      <MobileNav />
    </header>
  );
}
