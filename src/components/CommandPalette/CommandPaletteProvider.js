import { useState, useMemo, useContext, createContext } from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import { useTheme } from 'next-themes';
import { useAnimationControls } from 'framer-motion';

import { dashboard, projects, bookmarks, snippets, blog, uses } from '@/data/routes';
import contact from '@/data/contact';
import { getCategoryFormatted } from '@/helpers/category.helper';

import CommandPalette from './CommandPalette';
import { SunIcon, MoonIcon, MonitorIcon } from '@/components/Icons';

export const CommandPaletteContext = createContext();

export default function CommandPaletteProvider() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const animationControls = useAnimationControls();

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
    router.push(pathname).then(() => handleResetStatus());
  };

  const handleBreadcrumbs = (slug) => {
    animationControls.start({ scale: [1, 0.97, 1] });
    setSelected(0);
    setBreadcrumbs((prevState) => [...prevState, slug]);
    setSearchTerm('');
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
          icon: snippets.icon,
          title: snippets.title,
          click: () => handleBreadcrumbs(snippets.title),
        },
        {
          icon: blog.icon,
          title: blog.title,
          click: () => handleNavigation(blog.pathname),
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

  const snippetsOptions =
    [...new Set(snippetsData?.map((snippet) => snippet.category))].map((category) => ({
      title: getCategoryFormatted(category)?.label,
      children: snippetsData
        ?.filter((item) => item.category === category)
        ?.map((el) => ({
          title: el.title,
          icon: getCategoryFormatted(el.category)?.icon,
          click: () => handleNavigation(el.slug),
        })),
    })) ?? [];

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
    <CommandPaletteContext.Provider
      value={{
        options,
        filterOptions,
        breadcrumbs,
        animationControls,
        ...value,
      }}
    >
      <CommandPalette />
    </CommandPaletteContext.Provider>
  );
}

export const useCommandPalette = () => useContext(CommandPaletteContext);
