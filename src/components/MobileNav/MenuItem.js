import { motion } from 'framer-motion';
import clsx from 'clsx';

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: {
        stiffness: 500,
        velocity: -100,
      },
    },
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      y: {
        stiffness: 500,
      },
    },
  },
};

export default function MenuItem(props) {
  const { children, onClick, className } = props;

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div
        className={clsx(
          'dark:hover:text-zinc-400" cursor-pointer text-2xl text-black transition duration-200 ease-in-out hover:text-zinc-700 dark:text-zinc-100',
          className
        )}
      >
        {children}
      </div>
    </motion.li>
  );
}
