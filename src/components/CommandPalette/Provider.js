import { useState, useContext, createContext } from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import { useTheme } from 'next-themes';
import { useAnimationControls } from 'framer-motion';

import { dashboard, projects, bookmarks, snippets, blog, uses, guestbook } from '@/data/routes';
import projectsData from '@/data/projects';
import contactData from '@/data/contact';

import { getCategoryFormatted, SNIPPET_CATEGORIES } from '@/helpers/category.helper';

import CommandPalette from './CommandPalette';
import { Edit2Icon, SunIcon, MoonIcon, MonitorIcon } from '@/components/Icons';

export const CommandPaletteContext = createContext();

export default function Provider() {
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
          click: () => handleBreadcrumbs(projects.title),
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
        click: () => window.open(item.link, '_blank'),
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
        ?.filter((item) => item.release_year === releaseYear)
        ?.map((el) => ({
          title: el.title,
          icon: el.builtWith,
          click: () => window.open(el.links.repo, '_blank'),
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
        ?.filter((item) => item.category === category)
        ?.map((el) => ({
          title: el.title,
          icon: getCategoryFormatted(el.category)?.icon,
          click: () => handleNavigation(el.slug),
        })),
    })),
  ];

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
    [projects.title]: projectsOptions,
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

  return (
    <CommandPaletteContext.Provider
      value={{
        isOpen,
        searchTerm,
        selectedIndex,
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
