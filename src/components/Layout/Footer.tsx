import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
const avatarSrc = '/images/avatar.webp';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { Icons } from '@/components/icons';
import { Sun, Moon, CommandIcon } from 'lucide-react';

import { useTheme } from 'next-themes';
import useNowPlaying from '@/components/NowPlaying/useNowPlaying';
import PlayingBars from '@/components/NowPlaying/PlayingBars';
import Command from '@/components/Command';

import ROUTES from '@/constants/routes';
import { CONTACT } from '@/constants/contact';

const NAV_ROUTES = [
    {
        title: ROUTES.HOME.title,
        href: ROUTES.HOME.pathname,
        icon: (
            <Avatar className="h-10 w-10">
                <AvatarImage src={avatarSrc} alt="@jared-chen" />
                <AvatarFallback>Jared</AvatarFallback>
            </Avatar>
        ),
    },
    {
        title: ROUTES.DASHBOARD.title,
        href: ROUTES.DASHBOARD.pathname,
        icon: ROUTES.DASHBOARD.icon,
    },
    {
        title: ROUTES.PROJECTS.title,
        href: ROUTES.PROJECTS.pathname,
        icon: ROUTES.PROJECTS.icon,
    },
    {
        title: ROUTES.PHOTOS.title,
        href: ROUTES.PHOTOS.pathname,
        icon: ROUTES.PHOTOS.icon,
    },
];

const CONTACT_ROUTES = [
    {
        title: CONTACT.GITHUB.label,
        href: CONTACT.GITHUB.link,
        icon: CONTACT.GITHUB.icon,
    },
    {
        title: CONTACT.X.label,
        href: CONTACT.X.link,
        icon: CONTACT.X.icon,
    },
];

const MotionLink = motion.create(Link);

const linkMotion = {
    whileTap: {
        y: -30,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Footer() {
    const pathname = usePathname();
    const { data: nowPlaying } = useNowPlaying();
    const isPlaying = nowPlaying?.isPlaying;

    const { resolvedTheme, setTheme } = useTheme();
    const isDarkTheme = resolvedTheme === 'dark' || resolvedTheme === 'system';
    const [isCommandOpen, setCommandOpen] = useState(false);

    const ACTIVITY_ROUTES = [
        {
            title: isPlaying ? nowPlaying?.title : 'Not Playing',
            onClick: () => {
                if (isPlaying) {
                    window.open(nowPlaying.songUrl, '_blank');
                }
            },
            icon: isPlaying ? (
                <PlayingBars />
            ) : (
                <Icons.spotify className="h-full w-full" />
            ),
        },
        {
            title: 'Menu',
            onClick: () => setCommandOpen(true),
            icon: <CommandIcon className="h-full w-full" />,
        },
        {
            title: 'Theme',
            onClick: () => setTheme(resolvedTheme === 'light' ? 'dark' : 'light'),
            icon: isDarkTheme ? (
                <Sun className="h-full w-full" />
            ) : (
                <Moon className="h-full w-full" />
            ),
        },
    ];

    return (
        <motion.footer
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
            className="fixed bottom-4 left-1/2 max-w-full -translate-x-1/2"
        >
            <Command open={isCommandOpen} onChange={setCommandOpen} />
            <Dock className="items-end gap-2 rounded-full border border-zinc-100 py-3 dark:border-zinc-800">
                {NAV_ROUTES.map((route) => {
                    const isActive = route.href === pathname;

                    return (
                        <MotionLink
                            whileTap={linkMotion.whileTap}
                            href={route.href}
                            key={route.href}
                            className="relative flex flex-col justify-center"
                        >
                            <DockItem className="aspect-square rounded-full bg-zinc-200 bg-radial-[at_25%_25%] dark:from-zinc-800 dark:to-zinc-900">
                                <DockLabel>{route.title}</DockLabel>
                                <DockIcon>{route.icon}</DockIcon>
                            </DockItem>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: isActive ? 1 : 0,
                                    transition: { delay: 0.2 },
                                }}
                                className={cn(
                                    'absolute bottom-[-8px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-zinc-200 dark:bg-zinc-700',
                                )}
                            />
                        </MotionLink>
                    );
                })}

                <hr className="h-full w-[1px] border-0 bg-zinc-300 opacity-100 [mask-image:linear-gradient(0deg,transparent,rgb(255,255,255)16px,rgb(255,255,255)calc(100%-16px),transparent)] dark:bg-zinc-600"></hr>

                {CONTACT_ROUTES.map((route) => (
                    <MotionLink
                        whileTap={linkMotion.whileTap}
                        href={route.href}
                        key={route.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <DockItem className="aspect-square rounded-full bg-zinc-200 bg-radial-[at_25%_25%] dark:from-zinc-800 dark:to-zinc-900">
                            <DockLabel>{route.title}</DockLabel>
                            <DockIcon>{route.icon}</DockIcon>
                        </DockItem>
                    </MotionLink>
                ))}

                <hr className="h-full w-[1px] border-0 bg-zinc-300 opacity-100 [mask-image:linear-gradient(0deg,transparent,rgb(255,255,255)16px,rgb(255,255,255)calc(100%-16px),transparent)] dark:bg-zinc-600"></hr>

                {ACTIVITY_ROUTES.map((route) => (
                    <MotionLink
                        whileTap={linkMotion.whileTap}
                        href={'#'}
                        onClick={route.onClick}
                        key={route.title}
                    >
                        <DockItem className="aspect-square rounded-full bg-zinc-200 bg-radial-[at_25%_25%] dark:from-zinc-800 dark:to-zinc-900">
                            <DockLabel>{route.title}</DockLabel>
                            <DockIcon>{route.icon}</DockIcon>
                        </DockItem>
                    </MotionLink>
                ))}
            </Dock>
        </motion.footer>
    );
}
