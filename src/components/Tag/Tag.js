import clsx from 'clsx';

const types = {
  default: 'border-zinc-400 text-zinc-500 dark:text-zinc-400 dark:bg-zinc-500 ',
  primary: 'border-blue-300 bg-blue-500 text-blue-500',
  warning: 'border-amber-300 bg-amber-500 text-amber-600 dark:text-amber-500',
  success: 'border-green-300 bg-green-500 text-green-600 dark:text-green-500',
  error: 'border-red-300 bg-red-500 text-red-600 dark:text-red-500',
};

export default function Tag(props) {
  const { className = '', type = 'primary', label = '' } = props;

  return (
    <span
      className={clsx(
        'flex flex-none items-center justify-center gap-2 whitespace-nowrap rounded-2xl border bg-opacity-5 px-3 py-[2px] text-xs font-semibold tracking-wide hover:bg-opacity-40 dark:bg-opacity-10 dark:hover:bg-opacity-30',
        `${types?.[type]} ${className}`
      )}
    >
      {label}
    </span>
  );
}
