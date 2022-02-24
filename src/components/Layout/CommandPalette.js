import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import useDebounce from '@/hooks/utils/use-debounce.hook';
import routes from '@/data/routes';
import contact from '@/data/contact';

import clsx from 'clsx';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';

const CommandPalette = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const queryDebounce = useDebounce(query, 300);

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
      title: 'Page',
      children: routes,
    },
    {
      title: 'Contact',
      children: contact.map((item) => ({ title: item.label, pathname: item.link })),
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

  return (
    <>
      <button
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-gray-300 ring-gray-400 transition duration-200 ease-in-out hover:ring-2 dark:bg-gray-600 "
        type="button"
        aria-label="Command palette"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-6 w-6 fill-gray-700 dark:fill-gray-300"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 85.333333a170.666667 170.666667 0 0 1 170.666667 170.666667v85.333333h170.666666V256a170.666667 170.666667 0 0 1 170.666667-170.666667 170.666667 170.666667 0 0 1 170.666667 170.666667 170.666667 170.666667 0 0 1-170.666667 170.666667h-85.333333v170.666666h85.333333a170.666667 170.666667 0 0 1 170.666667 170.666667 170.666667 170.666667 0 0 1-170.666667 170.666667 170.666667 170.666667 0 0 1-170.666667-170.666667v-85.333333h-170.666666v85.333333a170.666667 170.666667 0 0 1-170.666667 170.666667 170.666667 170.666667 0 0 1-170.666667-170.666667 170.666667 170.666667 0 0 1 170.666667-170.666667h85.333333v-170.666666H256a170.666667 170.666667 0 0 1-170.666667-170.666667 170.666667 170.666667 0 0 1 170.666667-170.666667m426.666667 682.666667a85.333333 85.333333 0 0 0 85.333333 85.333333 85.333333 85.333333 0 0 0 85.333333-85.333333 85.333333 85.333333 0 0 0-85.333333-85.333333h-85.333333v85.333333m-85.333334-341.333333h-170.666666v170.666666h170.666666v-170.666666m-341.333333 256a85.333333 85.333333 0 0 0-85.333333 85.333333 85.333333 85.333333 0 0 0 85.333333 85.333333 85.333333 85.333333 0 0 0 85.333333-85.333333v-85.333333H256M341.333333 256a85.333333 85.333333 0 0 0-85.333333-85.333333 85.333333 85.333333 0 0 0-85.333333 85.333333 85.333333 85.333333 0 0 0 85.333333 85.333333h85.333333V256m426.666667 85.333333a85.333333 85.333333 0 0 0 85.333333-85.333333 85.333333 85.333333 0 0 0-85.333333-85.333333 85.333333 85.333333 0 0 0-85.333333 85.333333v85.333333h85.333333z"
            fill="text-gray-200"
          />
        </svg>
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
            <Dialog.Overlay className="fixed inset-0  bg-gray-500/75" />
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
              onChange={(option) => {
                router.push(option.pathname);
                setQuery('');
                setIsOpen(false);
              }}
              as="div"
              className="relative mx-auto max-w-lg divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 dark:divide-gray-600 dark:bg-gray-800"
            >
              <div className="flex items-center px-4">
                <SearchIcon className="h-6 w-6 text-gray-500" />
                <Combobox.Input
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-12 w-full border-0 bg-transparent px-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0 dark:text-gray-100"
                  placeholder="Search..."
                />
              </div>

              <div className="max-h-60 overflow-y-auto">
                {filterOptions.map((option) => (
                  <div
                    key={option.title}
                    className={clsx(
                      `${option.children.length === 0 ? 'hidden' : ''}`,
                      'border-b border-gray-300 py-2 dark:border-gray-600'
                    )}
                  >
                    <div className="my-1 px-4 text-base text-gray-400">{option.title}</div>
                    <Combobox.Options static className="">
                      {option.children.map((child, index) => (
                        <Combobox.Option key={`${index.toString()}`} value={child}>
                          {({ active }) => (
                            <div
                              className={clsx(
                                `${
                                  active
                                    ? 'bg-gray-400 text-white dark:bg-gray-600'
                                    : 'bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-300'
                                }`,
                                'flex cursor-pointer items-center gap-3 px-6 py-2 text-sm'
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
