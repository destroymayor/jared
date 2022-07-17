import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export default function Menu(props) {
  const { children } = props;

  return (
    <motion.ul
      variants={variants}
      className="absolute inset-0 top-16 flex flex-col items-start gap-y-8 p-8"
    >
      {children}
    </motion.ul>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
