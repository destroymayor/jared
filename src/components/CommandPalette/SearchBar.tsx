import { useRef } from 'react';

import { useCommandPalette } from './Provider';

import useKeyPress from '@/hooks/use-key-press.hook';

export default function SearchBar() {
  const searchBarRef = useRef<HTMLInputElement>(null);
  const { searchTerm, setSelectedIndex, setSearchTerm, resetCommandPaletteStatus } =
    useCommandPalette();

  useKeyPress('KeyS', () => searchBarRef.current?.focus());

  const handleSearch = (event: { target: HTMLInputElement }) => {
    setSearchTerm(event.target.value);
    setSelectedIndex(0);
  };

  const handleClose = () => resetCommandPaletteStatus();

  return (
    <div className="flex items-center">
      <input
        ref={searchBarRef}
        placeholder="Search or jump to..."
        type="text"
        value={searchTerm}
        className="h-10 w-full flex-1 border-0 bg-transparent text-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-0 dark:text-zinc-100"
        onChange={handleSearch}
      />

      <button
        className="h-6 w-10 rounded bg-zinc-200 text-xs text-zinc-600 transition duration-200 ease-in-out hover:bg-zinc-300 hover:text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
        onClick={handleClose}
      >
        ESC
      </button>
    </div>
  );
}
