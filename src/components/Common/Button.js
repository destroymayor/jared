import clsx from 'clsx';

const colors = {
  zinc: {
    bg: 'from-zinc-300 via-zinc-300 to-zinc-400 dark:from-zinc-600 dark:via-zinc-700 dark:to-zinc-800 ',
    color: 'text-zinc-900 dark:text-zinc-100',
  },
  sky: {
    bg: 'from-sky-300 via-sky-300 to-sky-400 dark:from-sky-600 dark:via-sky-700 dark:to-sky-900',
    color: 'text-sky-800 dark:text-sky-100',
  },
  amber: {
    bg: 'from-amber-300 via-amber-300 to-amber-400 dark:from-amber-600 dark:via-amber-700 dark:to-amber-900',
    color: 'text-amber-700 dark:text-amber-100',
  },
  green: {
    bg: 'from-green-300 via-green-300 to-green-400 dark:from-green-600 dark:via-green-700 dark:to-green-900',
    color: 'text-green-700 dark:text-green-100',
  },
  red: {
    bg: 'from-red-300 via-red-300 to-red-400 dark:from-red-600 dark:via-red-700 dark:to-red-900',
    color: 'text-red-700 dark:text-red-100',
  },
};

export default function Button(props) {
  const { className, children, onClick, color = 'zinc' } = props;

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        'flex w-full items-center justify-center gap-2 py-2 px-3',
        'rounded-xl shadow-md',
        'whitespace-nowrap',
        'transform transition hover:scale-[1.05]',
        `bg-gradient-to-r ${colors[color].bg} ${colors[color].color}`,
        className
      )}
    >
      {children}
    </button>
  );
}
