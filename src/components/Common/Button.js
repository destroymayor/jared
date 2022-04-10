import clsx from 'clsx';

const colors = {
  default:
    'from-zinc-300 via-zinc-300 to-zinc-400 dark:from-zinc-600 dark:via-zinc-700 dark:to-zinc-800 text-zinc-900 dark:text-zinc-100',
  primary:
    'from-sky-300 via-sky-300 to-sky-400 dark:from-sky-600 dark:via-sky-700 dark:to-sky-900 text-sky-800 dark:text-sky-100',
  warning:
    'from-amber-300 via-amber-300 to-amber-400 dark:from-amber-600 dark:via-amber-700 dark:to-amber-900 text-amber-700 dark:text-amber-100',
  success:
    'from-green-300 via-green-300 to-green-400 dark:from-green-600 dark:via-green-700 dark:to-green-900 text-green-700 dark:text-green-100',
  error:
    'from-red-300 via-red-300 to-red-400 dark:from-red-600 dark:via-red-700 dark:to-red-900 text-red-700 dark:text-red-100',
};

export default function Button(props) {
  const { children, onClick, color = 'default' } = props;

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
        `bg-gradient-to-r ${colors[color]}`
      )}
    >
      {children}
    </button>
  );
}
