import clsx from 'clsx';

const colors = {
  default: 'border-zinc-200 bg-zinc-500 text-zinc-600',
  primary: 'border-blue-300 bg-blue-500 text-zinc-100',
  warning: 'border-orange-200 bg-orange-500 text-orange-600',
  success: 'border-green-400 bg-green-500 text-green-600',
  error: 'border-red-200 bg-red-500 text-red-600',
};

export default function Button(props) {
  const { children, onClick, color = 'primary' } = props;

  const handleClick = (e) => {
    e.preventDefault();

    if (onClick) onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        'flex items-center justify-center gap-2 py-2 px-3',
        'w-full whitespace-nowrap rounded-xl shadow-md ',
        'transform transition hover:scale-[1.05]',
        `bg-gradient-to-r ${colors?.[color]}`
      )}
    >
      {children}
    </button>
  );
}
