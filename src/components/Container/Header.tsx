import Image from 'next/image';
import Link from 'next/link';

import avatar from '@/public/images/avatar.webp';

import DesktopNav from '@/components/DesktopNav';
import CommandPalette from '@/components/CommandPalette';
import ThemeToggle from '@/components/ThemeToggle';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-8 sm:px-4">
      <div className="flex items-center gap-4">
        <Link href={'/'}>
          <Image
            className="cursor-pointer"
            priority
            src={avatar}
            alt="Jared"
            width={40}
            height={40}
          />
        </Link>
        <DesktopNav />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <CommandPalette />
      </div>
    </header>
  );
}
