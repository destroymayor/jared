import { MouseEventHandler, ReactNode } from 'react';

export default function Button(props: {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) {
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
