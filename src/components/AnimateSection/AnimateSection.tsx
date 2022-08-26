import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import clsx from 'clsx';

type Props = {
  type?: 'fade-in' | 'revealing';
  className?: string;
  children: ReactNode;
};

export default function AnimateSection(props: Props) {
  const { type = 'revealing', className, children } = props;

  const animateType = `animate-${type}`;
  return (
    <motion.div
      {...props}
      className={clsx(animateType, className)}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
