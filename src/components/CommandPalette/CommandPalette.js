import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import useDebounce from '@/hooks/use-debounce.hook';
import { useTheme } from 'next-themes';

import routes from '@/data/routes';
import contact from '@/data/contact';

import clsx from 'clsx';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import { ArrowRightIcon, SearchIcon } from '@heroicons/react/outline';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { CommandIcon } from '@/components/Common/Icons';

const CommandPalette = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const queryDebounce = useDebounce(query, 300);
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const options = [
    {
      title: 'Navigation',
      children: routes.map((route) => ({
        ...route,
        icon: <ArrowRightIcon className="h-4 w-4" />,
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
          icon: <SunIcon className="h-6 w-6" />,
          title: 'Set theme to Light',
          click: () => setTheme('light'),
          isExternal: false,
        },
        {
          icon: <MoonIcon className="h-6 w-6" />,
          title: 'Set theme to Dark',
          click: () => setTheme('dark'),
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
      <button
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-zinc-100 ring-zinc-400 transition duration-200 ease-in-out hover:ring-2 focus:outline-none dark:bg-zinc-800 dark:hover:ring-zinc-600"
        type="button"
        aria-label="Command palette"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CommandIcon className="h-7 w-7" />
      </button>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog onClose={setIsOpen} className="fixed inset-0 z-[999] overflow-y-auto p-4 pt-[25vh]">
          <Transition.Child
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-zinc-600/90 dark:bg-zinc-900/90" />
          </Transition.Child>
          <Transition.Child
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Combobox
              onChange={(option) => handleSelect(option)}
              as="div"
              className="relative mx-auto max-w-lg overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-2xl ring-1 ring-black/5 dark:divide-zinc-600 dark:border-zinc-800  dark:bg-black/90"
            >
              <div className="flex items-center border-b border-zinc-300 dark:border-zinc-800">
                <SearchIcon className="mx-3 h-6 w-6 text-zinc-500" />
                <Combobox.Input
                  onChange={handleSearch}
                  className="h-12 w-full border-0 bg-transparent text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-0 dark:text-zinc-100"
                  placeholder="Search..."
                />
              </div>

              <div className="max-h-80 overflow-y-auto">
                {filterOptions.map((option) => (
                  <div
                    key={option.title}
                    className={clsx(`${option.children.length === 0 ? 'hidden' : ''}`, 'py-1')}
                  >
                    <div className="my-2 px-4 text-sm text-zinc-400">{option.title}</div>
                    <Combobox.Options static>
                      {option.children.map((child, index) => (
                        <Combobox.Option key={`${index.toString()}`} value={child}>
                          {({ active }) => (
                            <div
                              className={clsx(
                                `${
                                  active
                                    ? 'bg-zinc-200 text-zinc-600 dark:bg-zinc-700/60 dark:text-white'
                                    : 'text-zinc-600 dark:text-zinc-300'
                                }`,
                                'mx-2 flex cursor-pointer items-center gap-3 rounded-md p-2'
                              )}
                            >
                              {child.icon && <span>{child.icon}</span>}
                              <span>{child.title}</span>
                            </div>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  </div>
                ))}
              </div>

              {queryDebounce && filterOptions.map((item) => item.children).flat(1).length === 0 && (
                <p className="p-4 text-sm text-zinc-500">No results found.</p>
              )}
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default CommandPalette;
