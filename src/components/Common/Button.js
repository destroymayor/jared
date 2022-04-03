import clsx from 'clsx';

const colors = {
  default: 'from-zinc-600 via-zinc-700 to-zinc-800',
  primary: 'from-sky-600 via-sky-700 to-sky-900',
  warning: 'from-amber-600 via-amber-700 to-amber-900',
  success: 'from-green-600 via-green-700 to-green-900',
  error: 'from-red-600 via-red-700 to-red-900',
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
        'flex items-center justify-center gap-2 py-2 px-3',
        'w-full whitespace-nowrap rounded-xl shadow-md',
        'transform transition hover:scale-[1.05]',
        `bg-gradient-to-r ${colors[color]}`
      )}
    >
      {children}
    </button>
  );
}
