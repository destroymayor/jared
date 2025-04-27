'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

import { motion } from 'motion/react';
const WindowSize = dynamic(() => import('@/components/window-size'), { ssr: false });

export default function Footer() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.15 } }}
            className="text-zinc-400 dark:text-zinc-500 invisible md:visible"
        >
            <WindowSize />
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
        </motion.div>
    )
}
