import { SearchIcon } from '@/components/Icons';

export default function Search(props) {
  const { onChange } = props;

  return (
    <div className="flex items-center">
      <SearchIcon className="mx-2 h-5 w-5 text-zinc-500" />
      <input
        autoFocus
        type="text"
        placeholder="Search..."
        className="h-10 w-full border-0 bg-transparent text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-0 dark:text-zinc-100"
        onChange={onChange}
      />
    </div>
  );
}
