import Image from 'next/future/image';

import avatar from '@/public/images/avatar.webp';

import Link from '@/components/Link';
import DesktopNav from '@/components/DesktopNav';
import CommandPalette from '@/components/CommandPalette';

export default function Header() {
  return (
    <header className="flex w-11/12 items-center justify-between py-10 sm:max-w-[686px]">
      <div className="flex items-center gap-4">
        <Link href="/" className="">
          <Image priority src={avatar} alt="Jared" width={40} height={40} />
        </Link>
        <DesktopNav />
      </div>

      <CommandPalette />
    </header>
  );
}
