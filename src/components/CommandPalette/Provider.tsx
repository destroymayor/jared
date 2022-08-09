import { useState, useContext, createContext, Dispatch, SetStateAction, ReactNode } from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import { useTheme } from 'next-themes';
import { useAnimationControls, AnimationControls } from 'framer-motion';

import { dashboard, projects, bookmarks, snippets, blog, uses, guestbook } from '@/data/routes';
import projectsData from '@/data/projects';
import contactData from '@/data/contact';

import { getCategoryFormatted, SNIPPET_CATEGORIES } from '@/helpers/category.helper';

import CommandPalette from './CommandPalette';
import { Edit2Icon, SunIcon, MoonIcon, MonitorIcon } from '@/components/Icons';

type CommandPaletteContextProps = {
  isOpen: boolean;
  searchTerm: string;
  selectedIndex: number;
  filterOptions: any[];
  breadcrumbs: string[];
  animationControls: AnimationControls;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  setBreadcrumbs: Dispatch<SetStateAction<string[]>>;
  resetCommandPaletteStatus: () => void;
};

type OptionChildrenProps = {
  title: string;
  icon: ReactNode;
  click: () => void;
};

type OptionProps = {
  title?: string;
  children: OptionChildrenProps[];
};

export const CommandPaletteContext = createContext<CommandPaletteContextProps | any>(null);

export default function Provider() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const animationControls = useAnimationControls();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

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

  const options: OptionProps[] = [
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
        ?.filter((item) => item.release_year === releaseYear)
        ?.map((el) => ({
          title: el.title,
          icon: el.builtWith,
          click: () => handleOpenExternal(el.links.repo),
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

  const postsOptions = [
    {
      title: 'General',
      children: postsData?.map((post: { title: string; slug: string }) => ({
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
  const getOptions: any[] = optionsType[breadcrumbs.at(-1) as string] ?? options;

  const filterOptions: any[] =
    searchTerm === ''
      ? getOptions
      : getOptions.map((option) => ({
          ...option,
          children: option.children.filter((item: { title: string }) =>
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
