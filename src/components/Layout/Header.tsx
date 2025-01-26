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
    const headerBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(36px)']);
    const headerBg = useTransform(scrollY, [0, 100], ['transparent', 'transparent']);

    return (
        <motion.header
            className={cn('w-full', 'sticky left-0 right-0 top-0 z-50', 'px-4 sm:px-12')}
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
                <Link href={'/'}>
                    <div className="rounded-full border border-zinc-300 p-1 dark:border-zinc-700">
                        <Avatar className="h-[50px] w-[50px]">
                            <AvatarImage src={avatarSrc} alt="@jared-chen" />
                            <AvatarFallback>Jared</AvatarFallback>
                        </Avatar>
                    </div>
                </Link>

                <div className="flex items-center gap-2">
                    <DesktopNav />
                    <ThemeToggle />
                    <Command />
                </div>
            </div>
        </motion.header>
    );
}
