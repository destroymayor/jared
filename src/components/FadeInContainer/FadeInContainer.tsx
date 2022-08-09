import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import clsx from 'clsx';

type Props = {
  children: ReactNode;
  className: string;
};

export default function FadeInContainer(props: Props) {
  const { children, className } = props;

  return (
    <motion.div
      {...props}
      className={clsx('animate-revealing', className)}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
