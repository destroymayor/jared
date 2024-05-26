'use client';

import { ReactNode } from 'react';

import { motion } from 'framer-motion';

const variants = {
    hidden: {
        opacity: 0,
        translateY: 10,
    },
    visible: {
        translateY: 0,
        opacity: 1,
        transition: { delay: 0.3 },
    },
};

export default function FadeUpSection(props: {
    className?: string;
    children: ReactNode;
}) {
    const { className, children } = props;

    return (
        <motion.div
            className={className}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
