'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { useTheme } from 'next-themes';
import { useAnimationControls } from 'framer-motion';

import projectsData from '@/constants/projects';
import ROUTES from '@/constants/routes';
import contactData from '@/constants/contact';

import { getCategoryFormatted, SNIPPET_CATEGORIES } from '@/helpers/category.helper';
import { SunIcon, MoonIcon, MonitorIcon } from '@/components/Icons';

import { OptionProps } from './types';
import { CommandPaletteContext } from './context';
import CommandPalette from './CommandPalette';

export default function Provider() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const animationControls = useAnimationControls();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

  const getCurrentBreadcrumbPath = breadcrumbs.at(-1);
  const { data: snippetsData, isLoading: snippetsLoading } = useSWR<any>(
    getCurrentBreadcrumbPath === ROUTES.SNIPPETS.title ? '/api/snippets' : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const resetCommandPaletteStatus = () => {
    setIsOpen(false);
    setSearchTerm('');
    setSelectedIndex(0);
    setBreadcrumbs([]);
  };

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
    resetCommandPaletteStatus();
  };

  const handleBreadcrumbs = (slug: string) => {
    setBreadcrumbs((prevState) => [...prevState, slug]);
    setSelectedIndex(0);
    setSearchTerm('');

    animationControls.start({ scale: [1, 0.97, 1] });
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
          click: () => handleBreadcrumbs(ROUTES.PROJECTS.title),
        },
        {
          icon: ROUTES.SNIPPETS.icon,
          title: ROUTES.SNIPPETS.title,
          click: () => handleBreadcrumbs(ROUTES.SNIPPETS.title),
        },
        {
          icon: ROUTES.PHOTOS.icon,
          title: ROUTES.PHOTOS.title,
          click: () => handleNavigation(ROUTES.PHOTOS.pathname),
        },
        {
          icon: ROUTES.USES.icon,
          title: ROUTES.USES.title,
          click: () => handleNavigation(ROUTES.USES.pathname),
        },
        {
          icon: ROUTES.GUESTBOOK.icon,
          title: ROUTES.GUESTBOOK.title,
          click: () => handleNavigation(ROUTES.GUESTBOOK.pathname),
        },
        {
          icon: ROUTES.BOOKMARKS.icon,
          title: ROUTES.BOOKMARKS.title,
          click: () => handleNavigation(ROUTES.BOOKMARKS.pathname),
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
          icon: resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />,
          title: `Change Theme to ${resolvedTheme === 'dark' ? 'Light' : 'Dark'}`,
          click: () => handleThemeToggle(resolvedTheme === 'dark' ? 'light' : 'dark'),
        },
        {
          icon: <MonitorIcon />,
          title: `Change Theme to System`,
          click: () => handleThemeToggle('system'),
        },
      ],
    },
  ];

  const filterProjectReleaseYear = [
    ...new Set(projectsData.map((project) => project.release_year)),
  ];
  const projectsOptions = [
    {
      title: 'General',
      children: [
        {
          title: `${ROUTES.PROJECTS.title} Overview`,
          icon: ROUTES.PROJECTS.icon,
          click: () => handleNavigation(ROUTES.PROJECTS.pathname),
        },
      ],
    },
    ...filterProjectReleaseYear.map((releaseYear) => ({
      title: releaseYear,
      children: projectsData
        ?.filter((filterItem) => filterItem.release_year === releaseYear)
        ?.map((project) => ({
          title: project.title,
          icon: project.built_with,
          click: () => handleOpenExternal(project.links.repo),
        })),
    })),
  ];

  const filterSnippetsCategories = SNIPPET_CATEGORIES.map((category) => category.slug);
  const snippetsOptions = [
    {
      title: 'General',
      children: [
        {
          title: `${ROUTES.SNIPPETS.title} Overview`,
          icon: ROUTES.SNIPPETS.icon,
          click: () => handleNavigation(ROUTES.SNIPPETS.pathname),
        },
      ],
    },
    ,
    ...filterSnippetsCategories.map((category) => ({
      title: getCategoryFormatted(category)?.label,
      children: snippetsData
        ?.filter((item: { category: string }) => item.category === category)
        ?.map((el: { title: string; category: string; slug: string }) => ({
          title: el.title,
          icon: getCategoryFormatted(el.category)?.icon,
          click: () => handleNavigation(el.slug),
        })),
    })),
  ];

  const optionsType = {
    [ROUTES.PROJECTS.title]: {
      loading: !projectsData && getCurrentBreadcrumbPath === ROUTES.PROJECTS.title,
      data: projectsOptions,
    },
    [ROUTES.SNIPPETS.title]: {
      loading: snippetsLoading && getCurrentBreadcrumbPath === ROUTES.SNIPPETS.title,
      data: snippetsOptions,
    },
  };
  const getOptions = (optionsType[breadcrumbs.at(-1) as string]?.data as OptionProps[]) ?? options;
  const isLoading = isOpen && optionsType[breadcrumbs.at(-1) as string]?.loading;

  const filterOptions =
    searchTerm === ''
      ? getOptions
      : getOptions.map((option) => ({
          ...option,
          children: option.children.filter((item: { title: string }) =>
            item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          ),
        }));

  const value = useMemo(
    () => ({ isOpen, isLoading, searchTerm, selectedIndex }),
    [isOpen, isLoading, searchTerm, selectedIndex]
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
