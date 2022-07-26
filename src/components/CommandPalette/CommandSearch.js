import { Fragment } from 'react';

import { useCommandPalette } from './CommandPaletteProvider';

import { ChevronRightIcon } from '@/components/Icons';

export default function CommandSearch() {
  const { searchTerm, setIsOpen, setSelected, setSearchTerm } = useCommandPalette();

  const breadcrumbs = [{ label: 'Home', value: '' }];

  const handleSearch = (event) => {
    setSelected(0);
    setSearchTerm(event.target.value);
  };

  const handleToggle = () => setIsOpen((prevState) => !prevState);

  const handleFilterMenu = (value) => setSearchTerm(value);

  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex items-center gap-1 pt-2">
        {breadcrumbs.map((item, index, { length, lastIndex = length - 1 }) => (
          <Fragment key={item.label}>
            <button
              className="rounded bg-zinc-200 p-1 text-xs text-zinc-600 transition duration-200 ease-in-out hover:bg-zinc-400 hover:text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
              onClick={() => handleFilterMenu(item.value)}
            >
              {item.label}
            </button>

            {index !== lastIndex && <ChevronRightIcon className="h-4 w-4 dark:text-zinc-500" />}
          </Fragment>
        ))}
      </div>

      <div className="flex items-center">
        <input
          autoFocus
          placeholder="Search"
          type="text"
          value={searchTerm}
          role="combobox"
          aria-controls="combobox"
          aria-expanded
          className="h-10 w-full flex-1 border-0 bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-0 dark:text-zinc-100"
          onChange={handleSearch}
        />
        <div className="flex w-10 items-center justify-center ">
          <button
            className="h-6 w-10 rounded bg-zinc-200 text-xs text-zinc-600 transition duration-200 ease-in-out hover:bg-zinc-400 hover:text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
            onClick={handleToggle}
          >
            ESC
          </button>
        </div>
      </div>
    </div>
  );
}
