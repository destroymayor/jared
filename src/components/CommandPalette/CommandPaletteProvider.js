import { useState, useMemo, useContext, createContext } from 'react';
import { useRouter } from 'next/router';

import { useTheme } from 'next-themes';

import routes from '@/data/routes';
import contact from '@/data/contact';

import CommandPalette from './CommandPalette';
import { SunIcon, MoonIcon, MonitorIcon } from '@/components/Icons';

export const CommandPaletteContext = createContext();

export default function CommandPaletteProvider() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState(0);

  const { resolvedTheme, setTheme } = useTheme();

  const options = [
    {
      title: 'Navigation',
      children: routes.map((route) => ({
        icon: route.icon,
        title: route.title,
        click: () => router.push(route.pathname),
      })),
    },
    {
      title: 'Contact',
      children: contact.map((item) => ({
        icon: item.icon,
        title: item.label,
        click: () => window.open(item.link, '_blank'),
      })),
    },
    {
      title: 'Theme',
      children: [
        {
          icon: resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />,
          title: `Set theme to ${resolvedTheme === 'dark' ? 'Light' : 'Dark'}`,
          click: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
        },
        {
          icon: <MonitorIcon />,
          title: `Set theme to System`,
          click: () => setTheme('system'),
        },
      ],
    },
  ];

  const filterOptions =
    searchTerm === ''
      ? options
      : options.map((option) => ({
          ...option,
          children: option.children.filter((item) =>
            item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          ),
        }));

  const value = useMemo(
    () => ({
      isOpen,
      searchTerm,
      selected,
      setIsOpen,
      setSearchTerm,
      setSelected,
    }),
    [isOpen, searchTerm, selected, setIsOpen, setSearchTerm, setSelected]
  );

  return (
    <CommandPaletteContext.Provider value={{ options, filterOptions, ...value }}>
      <CommandPalette />
    </CommandPaletteContext.Provider>
  );
}

export const useCommandPalette = () => useContext(CommandPaletteContext);
