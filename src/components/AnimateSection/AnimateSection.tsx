'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import clsx from 'clsx';

const animateTypes = {
  'fade-in': 'animate-fade-in',
  revealing: 'animate-revealing',
};

export default function AnimateSection(props: {
  type?: 'fade-in' | 'revealing';
  className?: string;
  children: ReactNode;
}) {
  const { type = 'revealing', className, children } = props;

  const animateType = animateTypes[type];

  return (
    <motion.div
      {...props}
      className={clsx(animateType, className)}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.6 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
