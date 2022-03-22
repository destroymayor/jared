import clsx from 'clsx';

const Tag = (props) => {
  const { className = '', type = 'default', label = '' } = props;

  const types = {
    default: 'border-zinc-200 bg-zinc-500 text-zinc-600',
    info: 'border-blue-300 bg-blue-500 text-blue-600',
    warning: 'border-orange-200 bg-orange-500 text-orange-600',
    success: 'border-green-400 bg-green-500 text-green-600',
    error: 'border-red-200 bg-red-500 text-red-600',
  };

  return (
    <span
      className={clsx(
        'flex flex-none cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border bg-opacity-5 px-3 py-[2px] text-xs font-semibold uppercase tracking-wide hover:bg-opacity-40 dark:bg-opacity-10 dark:hover:bg-opacity-30',
        `${types?.[type]} ${className}`
      )}
    >
      {label}
    </span>
  );
};

export default Tag;
