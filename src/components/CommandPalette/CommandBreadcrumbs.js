import { Fragment } from 'react';

import { useCommandPalette } from './CommandPaletteProvider';

import { ChevronRightIcon } from '@/components/Icons';

export default function CommandBreadcrumbs() {
  const { breadcrumbs, animationControls, setBreadcrumbs, setSearchTerm, setSelected } =
    useCommandPalette();

  const handleSelect = () => {
    setBreadcrumbs(breadcrumbs.slice(0, 1));
    setSearchTerm('');
    setSelected(0);

    animationControls.start({ scale: [1, 0.97, 1] });
  };

  return (
    <div className="flex items-center gap-1 pt-2">
      {breadcrumbs.map((item, index, { length, lastIndex = length - 1 }) => (
        <Fragment key={item}>
          <button
            className="rounded bg-zinc-200 p-1 text-xs text-zinc-600 transition duration-200 ease-in-out hover:bg-zinc-300 hover:text-zinc-800 focus:outline-none dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
            onClick={() => handleSelect(item)}
          >
            {item}
          </button>

          {index !== lastIndex && <ChevronRightIcon className="h-4 w-4 dark:text-zinc-500" />}
        </Fragment>
      ))}
    </div>
  );
}
