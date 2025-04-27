'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const Footer = dynamic(() => import('@/components/Layout/Footer'), { ssr: false });

import { FULL_WIDTH_ROUTES } from '@/components/Layout/constants';

export default function Layout(props: { children: React.ReactNode }) {
    const { children } = props;
    const pathname = usePathname();

    const isFullWidth = FULL_WIDTH_ROUTES.includes(pathname);

    return (
        <div className="flex min-h-screen w-full flex-col">
            <motion.main
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.15 } }}
                className={cn(
                    'mx-auto w-full grow pb-22',
                    !isFullWidth && 'max-w-[50rem] px-4 pb-28 pt-4 sm:pt-28 sm:px-12'
                )}
            >
                {children}
            </motion.main>

            <Footer />
        </div>
    );
}
