import Link from 'next/link';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Command from '@/components/Command';

import DesktopNav from './DesktopNav';
import ThemeToggle from './ThemeToggle';

const avatarSrc = '/images/avatar.webp';

export default function Header() {
    const { scrollY } = useScroll();
    const headerPadding = useTransform(scrollY, [0, 100], ['32px', '12px']);
    const headerBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(36x)']);
    const headerBg = useTransform(scrollY, [0], ['transparent']);

    return (
        <motion.header
            className={cn(
                'w-full',
                'sticky top-0 z-50 left-0 right-0',
                'px-4 sm:px-12',
            )}
            style={{
                backdropFilter: headerBlur,
                backgroundColor: headerBg,
                paddingTop: headerPadding,
                paddingBottom: headerPadding,
            }}
        >
            <div
                className={cn(
                    'flex items-center justify-between',
                    'max-w-[60rem]',
                    'mx-auto'
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
            </div>
        </motion.header>
    );
}
