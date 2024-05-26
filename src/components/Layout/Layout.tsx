'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default function Layout(props: { children: React.ReactNode }) {
    const { children } = props;
    const pathname = usePathname();

    return (
        <div className="mx-auto flex min-h-screen max-w-[720px] flex-col">
            <Header />

            <motion.main
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.15 } }}
                className="relative flex-grow px-4"
            >
                {children}
            </motion.main>

            <Footer />
        </div>
    );
}
