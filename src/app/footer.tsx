'use client';

import Link from 'next/link';

import useWindowSize from '@/hooks/use-window-size.hook';

export default function Footer() {
    const { width, height } = useWindowSize();

    return (
        <div className="text-zinc-400 dark:text-zinc-500">
            <div className='fixed bottom-4 left-4 text-sm'>{width}x{height}</div>
            <Link
                href="https://github.com/destroymayor"
                className='fixed bottom-4 right-4 flex items-center gap-2 text-sm transition duration-300 ease-in-out dark:hover:text-zinc-100'
            >
                <span>
                    Jared Chen
                    <span>,</span>
                </span>
                <span className="text-xl">©</span>
                <span>{new Date().getFullYear()}</span>
            </Link>
        </div>
    )
}
