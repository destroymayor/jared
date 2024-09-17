'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

import { useTheme } from 'next-themes';
import { useAnimationControls } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

import ROUTES from '@/constants/routes';
import contactData from '@/constants/contact';

import { CommandPaletteContext } from './context';
import CommandPalette from './CommandPalette';

export default function Provider() {
    const router = useRouter();
    const { resolvedTheme, setTheme } = useTheme();

    const animationControls = useAnimationControls();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const resetCommandPaletteStatus = () => {
        setIsOpen(false);
        setSearchTerm('');
        setSelectedIndex(0);
    };

    const handleNavigation = (pathname: string) => {
        router.push(pathname);
        resetCommandPaletteStatus();
    };

    const handleThemeToggle = (theme: string) => {
        setTheme(theme);
        resetCommandPaletteStatus();
    };

    const handleOpenExternal = (link: string) => {
        window.open(link, '_blank');
    };

    const options = [
        {
            title: 'Navigation',
            children: [
                {
                    icon: ROUTES.DASHBOARD.icon,
                    title: ROUTES.DASHBOARD.title,
                    click: () => handleNavigation(ROUTES.DASHBOARD.pathname),
                },
                {
                    icon: ROUTES.PROJECTS.icon,
                    title: ROUTES.PROJECTS.title,
                    click: () => handleNavigation(ROUTES.PROJECTS.pathname),
                },
                {
                    icon: ROUTES.SNIPPETS.icon,
                    title: ROUTES.SNIPPETS.title,
                    click: () => handleNavigation(ROUTES.SNIPPETS.pathname),
                },
                {
                    icon: ROUTES.PHOTOS.icon,
                    title: ROUTES.PHOTOS.title,
                    click: () => handleNavigation(ROUTES.PHOTOS.pathname),
                },
                {
                    icon: ROUTES.GUESTBOOK.icon,
                    title: ROUTES.GUESTBOOK.title,
                    click: () => handleNavigation(ROUTES.GUESTBOOK.pathname),
                },
            ],
        },
        {
            title: 'Contact',
            children: contactData.map((item) => ({
                icon: item.icon,
                title: item.label,
                click: () => handleOpenExternal(item.link),
            })),
        },
        {
            title: 'Theme',
            children: [
                {
                    icon:
                        resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />,
                    title: `Change Theme to ${resolvedTheme === 'dark' ? 'Light' : 'Dark'}`,
                    click: () =>
                        handleThemeToggle(resolvedTheme === 'dark' ? 'light' : 'dark'),
                },
                {
                    icon: <Monitor size={20} />,
                    title: `Change Theme to System`,
                    click: () => handleThemeToggle('system'),
                },
            ],
        },
    ];

    const filterOptions =
        searchTerm === ''
            ? options
            : options.map((option) => ({
                  ...option,
                  children: option.children.filter((item: { title: string }) =>
                      item.title
                          .toLocaleLowerCase()
                          .includes(searchTerm.toLocaleLowerCase())
                  ),
              }));

    const value = useMemo(
        () => ({ isOpen, searchTerm, selectedIndex }),
        [isOpen, searchTerm, selectedIndex]
    );

    return (
        <CommandPaletteContext.Provider
            value={{
                ...value,
                options: filterOptions,
                animationControls,
                setIsOpen,
                setSearchTerm,
                setSelectedIndex,
                resetCommandPaletteStatus,
            }}
        >
            <CommandPalette />
        </CommandPaletteContext.Provider>
    );
}
