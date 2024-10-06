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
        <div className="overflow-hidden relative">
            <Meteors number={30} />
            <div className="flex w-full min-h-screen flex-col px-8 sm:px-12">
                <div className={cn('w-full max-w-[60rem]', 'mx-auto py-8')}>
                    <Header />
                </div>

                <motion.main
                    key={pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.15 } }}
                    className={cn(
                        'relative flex-grow',
                        'w-full mx-auto max-w-[50rem]',
                        'px-4'
                    )}
                >
                    {children}
                </motion.main>

                <div className={cn('w-full max-w-[60rem]', 'mx-auto')}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
