import { HexagonIcon } from '@/components/Icons';

import Link from '@/components/Link';

import DesktopNav from '@/components/DesktopNav';
import MobileNav from '@/components/MobileNav';

import CommandPalette from '@/components/CommandPalette';

export default function Header() {
  return (
    <header className="flex w-11/12 items-center justify-between py-6 sm:max-w-[686px]">
      <div className="flex items-center gap-4">
        <Link href="/" className="relative">
          <HexagonIcon className="h-10 w-10" />
          <span className="absolute top-1/2 left-1/2 font-bold [transform:translate(-50%,-50%)]">
            J
          </span>
        </Link>

        <DesktopNav />
      </div>

      <div className="hidden md:block">
        <CommandPalette />
      </div>

      <MobileNav />
    </header>
  );
}
