import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button(props: Props) {
  const { children } = props;

  return (
    <button
      {...props}
      className="flex h-10 w-10 items-center justify-center rounded-lg ring-zinc-400 transition duration-200 ease-in-out hover:ring-2 focus:outline-none dark:hover:ring-zinc-600"
      type="button"
      aria-label="Command palette"
    >
      {children}
    </button>
  );
}
