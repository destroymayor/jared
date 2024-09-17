import Image from 'next/image';
import Link from 'next/link';

import avatar from '@/public/images/avatar.webp';

import Command from '@/components/Command';

import DesktopNav from './DesktopNav';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-8 sm:px-4">
            <div className="flex items-center gap-4">
                <Link href={'/'}>
                    <Image
                        className="cursor-pointer rounded-full"
                        priority
                        src={avatar}
                        alt="Jared"
                        width={60}
                        height={60}
                    />
                </Link>
                <DesktopNav />
            </div>

            <div className="flex items-center gap-2">
                <ThemeToggle />
                <Command />
            </div>
        </header>
    );
}
