'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const animateTypes = {
    'fade-in': 'animate-fade-in',
    revealing: 'animate-revealing',
};

export default function AnimateSection(props: {
    type?: 'fade-in' | 'revealing';
    className?: string;
    children: React.ReactNode;
}) {
    const { type = 'revealing', className, children } = props;

    const animateType = animateTypes[type];

    return (
        <motion.div
            {...props}
            className={cn(animateType, className)}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
            animate={{ opacity: 1 }}
        >
            {children}
        </motion.div>
    );
}
