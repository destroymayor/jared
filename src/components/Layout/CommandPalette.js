import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import useDebounce from '@/hooks/use-debounce.hook';
import projects from '@/data/projects';
import routes from '@/data/routes';
import contact from '@/data/contact';

import clsx from 'clsx';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';
import { CommandIcon } from '@/components/Common/Icons';

const CommandPalette = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const queryDebounce = useDebounce(query, 300);

  const { data: snippetsData } = useSWR(isOpen ? '/api/snippets-list' : null, fetcher);

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
      children: routes,
    },
    {
      title: 'Projects',
      children: projects.map((project) => ({
        title: project.title,
        pathname: project.links.repo,
      })),
    },
    {
      title: 'Code Snippets',
      children:
        snippetsData?.map((item) => ({
          title: item.title,
          pathname: item.pathname,
        })) ?? [],
    },
    {
      title: 'Contact',
      children: contact.map((item) => ({
        title: item.label,
        pathname: item.link,
      })),
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
    router.push(option.pathname);
    setQuery('');
    setIsOpen(false);
  };

  const handleSearch = (event) => setQuery(event.target.value);

  return (
    <>
      <button
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-gray-300 ring-gray-400 transition duration-200 ease-in-out hover:ring-2 dark:bg-gray-600 "
        type="button"
        aria-label="Command palette"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CommandIcon />
      </button>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog onClose={setIsOpen} className="fixed inset-0 z-[999] overflow-y-auto p-4 pt-[25vh]">
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-zinc-600/90 dark:bg-zinc-900/90" />
          </Transition.Child>
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Combobox
              onChange={(option) => handleSelect(option)}
              as="div"
              className="relative mx-auto max-w-lg overflow-hidden rounded-md border border-gray-300 bg-white shadow-2xl ring-1 ring-black/5 dark:divide-gray-600 dark:border-zinc-800 dark:bg-black"
            >
              <div className="flex items-center border-b border-gray-300 dark:border-gray-600">
                <SearchIcon className="mx-3 h-6 w-6 text-gray-500" />
                <Combobox.Input
                  onChange={handleSearch}
                  className="h-12 w-full border-0 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0 dark:text-gray-100"
                  placeholder="Search..."
                />
              </div>

              <div className="max-h-60 overflow-y-auto">
                {filterOptions.map((option) => (
                  <div
                    key={option.title}
                    className={clsx(
                      `${option.children.length === 0 ? 'hidden' : ''}`,
                      'border-b border-gray-300 py-2 dark:border-zinc-800'
                    )}
                  >
                    <div className="my-1 px-4 text-sm text-gray-400">{option.title}</div>
                    <Combobox.Options static className="">
                      {option.children.map((child, index) => (
                        <Combobox.Option key={`${index.toString()}`} value={child}>
                          {({ active }) => (
                            <div
                              className={clsx(
                                `${
                                  active
                                    ? 'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-white'
                                    : 'bg-white text-gray-600 dark:bg-black dark:text-gray-300'
                                }`,
                                'mx-2 flex cursor-pointer items-center gap-3 rounded-md py-2 px-3'
                              )}
                            >
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
                <p className="p-4 text-sm text-gray-500">No results found.</p>
              )}
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default CommandPalette;
