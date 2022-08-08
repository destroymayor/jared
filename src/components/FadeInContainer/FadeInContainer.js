import { motion } from 'framer-motion';

import clsx from 'clsx';

export default function FadeInContainer(props) {
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
