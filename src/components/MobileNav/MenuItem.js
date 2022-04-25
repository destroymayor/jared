import { motion } from 'framer-motion';
import Link from '@/components/Link';

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
  const { item, index, onClick } = props;

  return (
    <motion.li
      key={`${index}`}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <Link
        href={item.pathname}
        className={clsx(
          'cursor-pointer text-2xl text-black transition duration-200 ease-in-out hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-400'
        )}
      >
        {item.title}
      </Link>
    </motion.li>
  );
}
