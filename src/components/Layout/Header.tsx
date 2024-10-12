import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Command from '@/components/Command';

import DesktopNav from './DesktopNav';
import ThemeToggle from './ThemeToggle';

const avatarSrc = '/images/avatar.webp';

export default function Header() {
    return (
        <header
            className={cn(
                'flex items-center justify-between',
                'w-full max-w-[60rem]',
                'mx-auto py-8',
                'sticky top-0 z-50 left-0 right-0',
                'bg-white dark:bg-black/90 backdrop-blur'
            )}
        >
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
