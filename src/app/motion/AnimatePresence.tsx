'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const variants = {
    open: {
        opacity: 1,
        scale: 1,
    },
    closed: {
        opacity: 0,
        scale: 1.1,
    },
};

import Layout from './Layout';
export default function AnimatePresenceExample() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <Layout>
            <Button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'Open'}
            </Button>
            <div className="flex gap-10">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="grid h-20 items-center bg-red-500 p-2"
                            initial={variants.closed}
                            animate={isOpen ? variants.open : variants.closed}
                            exit={variants.closed}
                            variants={variants}
                        >
                            with AnimatePresence
                        </motion.div>
                    )}
                </AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="grid h-20 items-center bg-red-500 p-2"
                        initial={variants.closed}
                        animate={isOpen ? variants.open : variants.closed}
                        exit={variants.closed}
                        variants={variants}
                    >
                        without AnimatePresence
                    </motion.div>
                )}
            </div>
        </Layout>
    );
}
