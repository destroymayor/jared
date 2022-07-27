import { useState, useMemo, useContext, createContext } from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import { useTheme } from 'next-themes';

import { dashboard, projects, bookmarks, snippets, uses } from '@/data/routes';
import contact from '@/data/contact';

import CommandPalette from './CommandPalette';
import { ArrowRightIcon, SunIcon, MoonIcon, MonitorIcon } from '@/components/Icons';

export const CommandPaletteContext = createContext();

export default function CommandPaletteProvider() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState(0);
  const [breadcrumbs, setBreadcrumbs] = useState(['Home']);

  const { data: snippetsData } = useSWR('/api/snippets', {
    revalidateOnFocus: false,
  });

  const handleResetStatus = () => {
    setIsOpen(false);
    setSearchTerm('');
    setSelected(0);
  };

  const handleNavigation = (pathname) => {
    router.push(pathname);
    handleResetStatus();
  };

  const handleBreadcrumbs = (slug) => {
    setBreadcrumbs((prevState) => [...prevState, slug]);
    setSearchTerm('');
    setSelected(0);
  };

  const options = [
    {
      title: 'Navigation',
      children: [
        {
          icon: dashboard.icon,
          title: dashboard.title,
          click: () => handleNavigation(dashboard.pathname),
        },
        {
          icon: projects.icon,
          title: projects.title,
          click: () => handleNavigation(projects.pathname),
        },
        {
          icon: <ArrowRightIcon />,
          title: snippets.title,
          click: () => handleBreadcrumbs(snippets.title),
        },
        {
          icon: uses.icon,
          title: uses.title,
          click: () => handleNavigation(uses.pathname),
        },
        {
          icon: bookmarks.icon,
          title: bookmarks.title,
          click: () => handleNavigation(bookmarks.pathname),
        },
      ],
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
          click: () => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            handleResetStatus();
          },
        },
        {
          icon: <MonitorIcon />,
          title: `Set theme to System`,
          click: () => {
            setTheme('system');
            handleResetStatus();
          },
        },
      ],
    },
  ];

  const snippetsOptions = [
    {
      title: null,
      children: snippetsData?.map((snippet) => ({
        title: snippet.title,
        icon: <ArrowRightIcon />,
        click: () => router.push(snippet.slug),
      })),
    },
  ];

  const optionsType = {
    Home: options,
    [snippets.title]: snippetsOptions,
  };

  const getOptions = optionsType[breadcrumbs.at(-1)] ?? options;

  const filterOptions =
    searchTerm === ''
      ? getOptions
      : getOptions.map((option) => ({
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
      setBreadcrumbs,
    }),
    [isOpen, searchTerm, selected, setIsOpen, setSearchTerm, setSelected, setBreadcrumbs]
  );

  return (
    <CommandPaletteContext.Provider value={{ options, filterOptions, breadcrumbs, ...value }}>
      <CommandPalette />
    </CommandPaletteContext.Provider>
  );
}

export const useCommandPalette = () => useContext(CommandPaletteContext);
