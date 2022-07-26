import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import useKeyPress from '@/hooks/use-key-press.hook';
import useOnClickOutside from '@/hooks/use-on-click-outside.hook';
import useScrollDisabler from '@/hooks/use-scroll-disabler.hook';
import { useTheme } from 'next-themes';

import routes from '@/data/routes';
import contact from '@/data/contact';

import { AnimatePresence, motion } from 'framer-motion';
import { CommandIcon, SunIcon, MoonIcon } from '@/components/Icons';

import Button from './Button';
import Backdrop from './Backdrop';
import CommandSearch from './CommandSearch';
import CommandMenu from './CommandMenu';

export default function CommandPalette() {
  const router = useRouter();

  const containerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const { theme, setTheme } = useTheme();

  useOnClickOutside(containerRef, () => {
    setIsOpen(false);
    setQuery('');
  });
  useScrollDisabler(isOpen);

  useKeyPress('Escape', () => {
    if (isOpen) handleToggle();
  });

  useKeyPress('KeyK', (event) => {
    if (event.metaKey || event.ctrlKey) handleToggle();
  });

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
          icon: theme === 'dark' ? <SunIcon /> : <MoonIcon />,
          title: `Set theme to ${theme === 'dark' ? 'Light' : 'Dark'}`,
          click: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
        },
      ],
    },
  ];

  const handleToggle = () => setIsOpen((prevState) => !prevState);

  const handleSelect = (option) => {
    option.click();

    setQuery('');
    setIsOpen(false);
  };

  const handleSearch = (event) => setQuery(event.target.value);

  const handleFilterMenu = (value) => setQuery(value);

  const filterOptions =
    query === ''
      ? options
      : options.map((option) => ({
          ...option,
          children: option.children.filter((item) =>
            item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
          ),
        }));

  return (
    <>
      <Button onClick={handleToggle}>
        <CommandIcon className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="bg-zinc-20 fixed inset-0 z-[999] overflow-y-auto pt-[20vh] md:px-4"
          >
            <Backdrop />
            <motion.div
              ref={containerRef}
              transition={{ duration: 0.2 }}
              className="relative mx-auto max-w-lg overflow-hidden rounded-lg border border-zinc-300 bg-white p-2 shadow-2xl ring-1 ring-black/5 dark:divide-zinc-600 dark:border-zinc-900 dark:bg-black/90"
            >
              <CommandSearch
                value={query}
                onChange={handleSearch}
                onClose={handleToggle}
                onFilterMenu={handleFilterMenu}
              />
              <hr className="relative -left-2 my-2 w-[calc(100%+16px)]" />
              <CommandMenu options={filterOptions} onSelect={(value) => handleSelect(value)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
