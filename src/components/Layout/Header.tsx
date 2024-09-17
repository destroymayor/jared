import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Command from '@/components/Command';

import DesktopNav from './DesktopNav';
import ThemeToggle from './ThemeToggle';

const avatarSrc = '/images/avatar.webp';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-8 sm:px-4">
            <div className="flex items-center gap-4">
                <Link href={'/'}>
                    <Avatar className="w-[60px] h-[60px]">
                        <AvatarImage src={avatarSrc} alt="@jared-chen" />
                        <AvatarFallback>Jared</AvatarFallback>
                    </Avatar>
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
