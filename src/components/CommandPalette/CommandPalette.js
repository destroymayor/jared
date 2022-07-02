import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import useDebounce from '@/hooks/use-debounce.hook';
import useOnClickOutside from '@/hooks/use-on-click-outside.hook';
import useScrollDisabler from '@/hooks/use-scroll-disabler.hook';
import { useTheme } from 'next-themes';

import routes from '@/data/routes';
import contact from '@/data/contact';

import { AnimatePresence, motion } from 'framer-motion';
import { CommandIcon, SunIcon, MoonIcon } from '@/components/Icons';

import Button from './Button';
import Backdrop from './Backdrop';
import Search from './Search';
import Menu from './Menu';

export default function CommandPalette() {
  const router = useRouter();

  const containerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const queryDebounce = useDebounce(query, 300);
  const { theme, setTheme } = useTheme();

  useOnClickOutside(containerRef, () => setIsOpen(false));
  useScrollDisabler(isOpen);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        handleToggle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const options = [
    {
      title: 'Navigation',
      children: routes.map((route) => ({
        ...route,
        icon: route.icon,
        isExternal: false,
      })),
    },
    {
      title: 'Contact',
      children: contact.map((item) => ({
        icon: item.icon,
        title: item.label,
        pathname: item.link,
        isExternal: true,
      })),
    },
    {
      title: 'Theme',
      children: [
        {
          icon: theme === 'dark' ? <SunIcon /> : <MoonIcon />,
          title: `Set theme to ${theme === 'dark' ? 'Light' : 'Dark'}`,
          click: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
          isExternal: false,
        },
      ],
    },
  ];

  const filterOptions = queryDebounce
    ? options.map((option) => ({
        ...option,
        children: option.children.filter((item) =>
          item.title.toLocaleLowerCase().includes(queryDebounce.toLocaleLowerCase())
        ),
      }))
    : options;

  const handleToggle = () => setIsOpen((prevState) => !prevState);

  const handleSelect = (option) => {
    setQuery('');
    setIsOpen(false);

    if (option.click) {
      option.click();
      return;
    }

    if (option.isExternal) {
      window.open(option.pathname, '_blank');
    } else {
      router.push(option.pathname);
    }
  };

  const handleSearch = (event) => setQuery(event.target.value);

  return (
    <>
      <Button onClick={handleToggle}>
        <CommandIcon className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1 },
              closed: { opacity: 0 },
            }}
            exit={{ opacity: 0 }}
            className="bg-zinc-20 fixed inset-0 z-[999] overflow-y-auto p-4 pt-[25vh]"
          >
            <Backdrop />

            <motion.div
              ref={containerRef}
              className="relative mx-auto max-w-lg overflow-hidden rounded-lg border border-zinc-300 bg-white p-2 shadow-2xl ring-1 ring-black/5 dark:divide-zinc-600 dark:border-zinc-900 dark:bg-black/90"
            >
              <Search onChange={handleSearch} />
              <hr className="relative -left-2 my-2 w-[calc(100%+16px)]" />
              <Menu options={filterOptions} onSelect={(value) => handleSelect(value)} />

              {filterOptions.map((item) => item.children).flat(1).length === 0 && (
                <p className="p-4 text-sm text-zinc-500">No results found.</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
