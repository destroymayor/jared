import { SearchIcon } from '@/components/Icons';

export default function CommandSearch(props) {
  const { onChange, onClose } = props;

  return (
    <div className="flex items-center">
      <SearchIcon className="mx-2 h-5 w-5 text-zinc-500" />
      <input
        autoFocus
        type="text"
        placeholder="Search..."
        className="ml-1 h-10 w-full flex-1 border-0 bg-transparent text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-0 dark:text-zinc-100"
        onChange={onChange}
      />
      <div className="flex w-14 items-center justify-center ">
        <button
          className="h-6 w-10 rounded bg-zinc-300 text-xs text-zinc-800 transition duration-200 ease-in-out hover:bg-zinc-400 hover:text-zinc-800 dark:bg-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
          onClick={onClose}
        >
          ESC
        </button>
      </div>
    </div>
  );
}
