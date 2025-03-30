'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Footer from '@/components/Layout/Footer';

export default function Layout(props: { children: React.ReactNode }) {
    const { children } = props;
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen w-full flex-col">
            <motion.main
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.15 } }}
                className={cn(
                    'grow',
                    'mx-auto w-full max-w-[50rem]',
                    'px-4 sm:px-12'
                )}
            >
                {children}
            </motion.main>

            <Footer />
        </div>
    );
}
