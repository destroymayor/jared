'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default function Layout(props: { children: React.ReactNode }) {
    const { children } = props;
    const pathname = usePathname();

    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <Header />

            <motion.main
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.15 } }}
                className={cn(
                    'relative grow',
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
