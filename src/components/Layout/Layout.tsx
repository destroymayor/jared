'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Meteors from '@/components/ui/meteors';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default function Layout(props: { children: React.ReactNode }) {
    const { children } = props;
    const pathname = usePathname();

    return (
        <>
            <div className="overflow-hidden h-60 absolute top-0 left-0 right-0">
                <Meteors number={30} />
            </div>
            <div className="flex w-full relative min-h-screen flex-col">
                <Header />

                <motion.main
                    key={pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.15 } }}
                    className={cn(
                        'relative flex-grow',
                        'w-full mx-auto max-w-[50rem]',
                        'px-4 sm:px-12'
                    )}
                >
                    {children}
                </motion.main>

                <Footer />
            </div>
        </>
    );
}
