import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import { useTheme } from 'next-themes';
import { useAnimationControls, AnimationControls } from 'framer-motion';

import { dashboard, projects, photos, bookmarks, snippets, uses, guestbook } from '@/data/routes';
import projectsData from '@/data/projects';
import contactData from '@/data/contact';

import { getCategoryFormatted, SNIPPET_CATEGORIES } from '@/helpers/category.helper';

import CommandPalette from './CommandPalette';
import { SunIcon, MoonIcon, MonitorIcon } from '@/components/Icons';

type OptionChildrenProps = {
  title: string;
  icon: React.ReactNode;
  click: () => void;
};

type OptionProps = {
  title?: string;
  children: OptionChildrenProps[];
};

interface CommandPaletteContextProps {
  isOpen: boolean;
  isLoading: boolean;
  searchTerm: string;
  selectedIndex: number;
  filterOptions: OptionProps[];
  breadcrumbs: string[];
  animationControls: AnimationControls;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  setBreadcrumbs: React.Dispatch<React.SetStateAction<string[]>>;
  resetCommandPaletteStatus: () => void;
}

export const CommandPaletteContext = React.createContext<CommandPaletteContextProps>(
  {} as CommandPaletteContextProps
);

export default function Provider() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const animationControls = useAnimationControls();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [breadcrumbs, setBreadcrumbs] = React.useState<string[]>([]);

  const getCurrentBreadcrumbPath = breadcrumbs.at(-1);
  const { data: snippetsData } = useSWR(
    getCurrentBreadcrumbPath === snippets.title ? '/api/snippets' : null,
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
          icon: dashboard.icon,
          title: dashboard.title,
          click: () => handleNavigation(dashboard.pathname),
        },
        {
          icon: projects.icon,
          title: projects.title,
          click: () => handleBreadcrumbs(projects.title),
        },
        {
          icon: snippets.icon,
          title: snippets.title,
          click: () => handleBreadcrumbs(snippets.title),
        },
        {
          icon: photos.icon,
          title: photos.title,
          click: () => handleNavigation(photos.pathname),
        },
        {
          icon: uses.icon,
          title: uses.title,
          click: () => handleNavigation(uses.pathname),
        },
        {
          icon: guestbook.icon,
          title: guestbook.title,
          click: () => handleNavigation(guestbook.pathname),
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
          title: `${projects.title} Overview`,
          icon: projects.icon,
          click: () => handleNavigation(projects.pathname),
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
          title: `${snippets.title} Overview`,
          icon: snippets.icon,
          click: () => handleNavigation(snippets.pathname),
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
    [projects.title]: {
      loading: !projectsData && getCurrentBreadcrumbPath === projects.title,
      data: projectsOptions,
    },
    [snippets.title]: {
      loading: !snippetsData && getCurrentBreadcrumbPath === snippets.title,
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

export const useCommandPalette = () => React.useContext(CommandPaletteContext);
