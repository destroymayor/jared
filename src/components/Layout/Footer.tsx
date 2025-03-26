import Link from 'next/link';

const avatarSrc = '/images/avatar.webp';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { Icons } from '@/components/icons';
import useNowPlaying from '@/components/NowPlaying/useNowPlaying';
import PlayingBars from '@/components/NowPlaying/PlayingBars';
import ThemeToggle from './ThemeToggle';

import ROUTES from '@/constants/routes';
import {CONTACT} from '@/constants/contact';

const NAV_ROUTES = [
    {
        title: ROUTES.HOME.title,
        href: ROUTES.HOME.pathname,
        icon: <Avatar className='h-full w-full min-w-6 min-h-6'>
                <AvatarImage src={avatarSrc} alt="@jared-chen" />
                <AvatarFallback>Jared</AvatarFallback>
            </Avatar>
    },
    {
        title: ROUTES.DASHBOARD.title,
        href: ROUTES.DASHBOARD.pathname,
        icon: ROUTES.DASHBOARD.icon
    },
    {
        title: ROUTES.PROJECTS.title,
        href: ROUTES.PROJECTS.pathname,
        icon: ROUTES.PROJECTS.icon
    },
    {
        title: ROUTES.PHOTOS.title,
        href: ROUTES.PHOTOS.pathname,
        icon: ROUTES.PHOTOS.icon
    },
];

const CONTACT_ROUTES = [
    {
        title: CONTACT.GITHUB.label,
        href: CONTACT.GITHUB.link,
        icon: CONTACT.GITHUB.icon
    },
    {
        title: CONTACT.X.label,
        href: CONTACT.X.link,
        icon: CONTACT.X.icon
    },
];

export default function Footer() {
    const { data: nowPlaying } = useNowPlaying();


    const ACTIVITY_ROUTES = [
        {
            title: nowPlaying?.isPlaying ? nowPlaying.title : 'Not Playing',
            href: '#',
            icon: nowPlaying?.isPlaying ? <PlayingBars /> : <Icons.spotify className="w-full h-full" />
        },
        {
            title: 'Theme',
            href: '#',
            icon: <div><ThemeToggle /></div>
        }
    ];

    return (
        <footer className='fixed bottom-4 left-1/2 max-w-full -translate-x-1/2'>
            <Dock className='items-end py-3 gap-2 rounded-full border border-zinc-100 dark:border-zinc-800'>
                {NAV_ROUTES.map((route) => (
                    <Link href={route.href} key={route.href}>
                        <DockItem className='aspect-square rounded-full bg-zinc-200 dark:bg-zinc-800'>
                            <DockLabel>{route.title}</DockLabel>
                            <DockIcon>{route.icon}</DockIcon>
                        </DockItem>
                    </Link>
                ))}
                <Separator orientation='vertical' />

                {CONTACT_ROUTES.map((route) => (
                    <Link href={route.href} key={route.href} target='_blank' rel='noopener noreferrer'>
                        <DockItem className='aspect-square rounded-full bg-zinc-200 dark:bg-zinc-800'>
                            <DockLabel>{route.title}</DockLabel>
                            <DockIcon>{route.icon}</DockIcon>
                        </DockItem>
                    </Link>
                ))}

                <Separator orientation='vertical' />

                {ACTIVITY_ROUTES.map((route) => (
                    <DockItem key={route.title} className='aspect-square rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-800'>
                        <DockLabel>{route.title}</DockLabel>
                        <DockIcon>{route.icon}</DockIcon>
                    </DockItem>
                ))}
            </Dock>
        </footer>
    );
}
