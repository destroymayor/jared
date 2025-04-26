'use client';

import Glow from '@/components/ui/glow';
import Work from './work';
import Footer from './footer';

export default function Page() {
    return (
        <>
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <Glow />
            </div>
            <div className="flex pb-12 sm:pb-24 flex-col gap-3 pt-20 sm:pt-12">
                <h1 className="text-4xl font-extrabold">Jared</h1>
                <h2 className="text-zinc-800 dark:text-zinc-300">Front-End Developer</h2>
                <hr className="w-28 border border-zinc-300 dark:border-zinc-700" />
                <p className="pt-2 text-sm leading-7 text-zinc-800 dark:text-zinc-300">
                    I&#39;m <b>Jared Chen</b>, a Front-end Developer working with{' '}
                    <b>React</b> and <b>Next.js</b> who enjoys building great quality and
                    great user experience products.
                </p>
            </div>
            <Work />
            <Footer />
        </>
    );
}
