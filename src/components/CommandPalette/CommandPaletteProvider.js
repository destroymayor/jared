import { useState, useMemo, useContext, createContext } from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import { useTheme } from 'next-themes';
import { useAnimationControls } from 'framer-motion';

import { dashboard, projects, bookmarks, snippets, blog, uses } from '@/data/routes';
import contact from '@/data/contact';
import { getCategoryFormatted, SNIPPET_CATEGORIES } from '@/helpers/category.helper';

import CommandPalette from './CommandPalette';
import { Edit2Icon, SunIcon, MoonIcon, MonitorIcon } from '@/components/Icons';

export const CommandPaletteContext = createContext();

export default function CommandPaletteProvider() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const animationControls = useAnimationControls();

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const { data: snippetsData } = useSWR(isOpen ? '/api/snippets' : null, {
    revalidateOnFocus: false,
  });

  const { data: postsData } = useSWR(isOpen ? '/api/posts' : null, {
    revalidateOnFocus: false,
  });

  const resetCommandPaletteStatus = () => {
    setIsOpen(false);
    setSearchTerm('');
    setSelectedIndex(0);
    setBreadcrumbs([]);
  };

  const handleNavigation = (pathname) => {
    router.push(pathname);
    resetCommandPaletteStatus();
  };

  const handleBreadcrumbs = (slug) => {
    setBreadcrumbs((prevState) => [...prevState, slug]);
    setSelectedIndex(0);
    setSearchTerm('');

    animationControls.start({ scale: [1, 0.97, 1] });
  };

  const handleThemeToggle = (theme) => {
    setTheme(theme);
    resetCommandPaletteStatus();
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
          click: () => handleBreadcrumbs(blog.title),
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
          click: () => handleThemeToggle(resolvedTheme === 'dark' ? 'light' : 'dark'),
        },
        {
          icon: <MonitorIcon />,
          title: `Set theme to System`,
          click: () => handleThemeToggle('system'),
        },
      ],
    },
  ];

  const filterSnippetsCategories = SNIPPET_CATEGORIES.map((category) => category.slug);
  const snippetsOptions = filterSnippetsCategories.map((category) => ({
    title: getCategoryFormatted(category)?.label,
    children: snippetsData
      ?.filter((item) => item.category === category)
      ?.map((el) => ({
        title: el.title,
        icon: getCategoryFormatted(el.category)?.icon,
        click: () => handleNavigation(el.slug),
      })),
  }));

  const postsOptions = [
    {
      title: null,
      children: postsData?.map((post) => ({
        title: post.title,
        icon: <Edit2Icon />,
        click: () => handleNavigation(post.slug),
      })),
    },
  ];

  const optionsType = {
    [snippets.title]: snippetsOptions,
    [blog.title]: postsOptions,
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
      selectedIndex,
    }),
    [isOpen, searchTerm, selectedIndex]
  );

  return (
    <CommandPaletteContext.Provider
      value={{
        ...value,
        filterOptions,
        breadcrumbs,
        animationControls,
        setIsOpen,
        setSearchTerm,
        setSelectedIndex,
        setBreadcrumbs,
        resetCommandPaletteStatus,
      }}
    >
      <CommandPalette />
    </CommandPaletteContext.Provider>
  );
}

export const useCommandPalette = () => useContext(CommandPaletteContext);
