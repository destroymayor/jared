import { useCommandPalette } from './CommandPaletteProvider';

export default function CommandSearch() {
  const { searchTerm, setIsOpen, setSelectedIndex, setSearchTerm } = useCommandPalette();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSelectedIndex(0);
  };

  const handleToggle = () => setIsOpen((prevState) => !prevState);

  return (
    <div className="flex items-center">
      <input
        placeholder="What do you need?"
        type="text"
        value={searchTerm}
        role="combobox"
        aria-controls="combobox"
        aria-expanded
        className="h-10 w-full flex-1 border-0 bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-0 dark:text-zinc-100"
        onChange={handleSearch}
      />

      <button
        className="h-6 w-10 rounded bg-zinc-200 text-xs text-zinc-600 transition duration-200 ease-in-out hover:bg-zinc-300 hover:text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
        onClick={handleToggle}
      >
        ESC
      </button>
    </div>
  );
}
