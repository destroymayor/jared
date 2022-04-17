import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1 },
  closed: {
    opacity: 0,
    transition: { delay: 0.8 },
  },
};

export default function Backdrop() {
  return (
    <motion.div
      variants={variants}
      className="absolute inset-0 bg-zinc-50 dark:bg-black dark:bg-opacity-90 dark:backdrop-blur"
    />
  );
}
