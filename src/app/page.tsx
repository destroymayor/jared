'use client';

import Link from 'next/link';
import Glow from '@/components/ui/glow';
import Footer from './footer';

export default function Page() {
    return (
        <>
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <Glow />
            </div>
            <div className="flex min-h-[400px] flex-col gap-3 pt-12">
                <h1 className="text-4xl font-extrabold">Jared</h1>
                <h2 className="text-zinc-800 dark:text-zinc-300">Front-End Developer</h2>

                <hr className="w-28 border border-zinc-300 dark:border-zinc-700" />

                <p className="pt-2 text-sm leading-7 text-zinc-800 dark:text-zinc-300">
                    I&#39;m <b>Jared Chen</b>, a Front-end Developer working with{' '}
                    <b>React</b> and <b>Next.js</b> who enjoys building great quality and
                    great user experience products.
                </p>

                <p className="pt-4 text-sm leading-7 text-zinc-800 dark:text-zinc-300">
                    <span>Currently working at </span>
                    <Link
                        href="https://www.pinkoi.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-end gap-2"
                    >
                        <span className="text-sky-600 hover:underline">Pinkoi</span>
                    </Link>
                    .{' '}
                </p>
            </div>
            <Footer />
        </>
    );
}
