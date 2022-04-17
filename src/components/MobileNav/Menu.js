import router from 'next/router';

import { motion } from 'framer-motion';
import MenuItem from '@/components/MobileNav/MenuItem';

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
  const { options = [], onClose } = props;

  const handleNavigation = (pathname) => {
    router.push(pathname);
    onClose();
  };

  return (
    <motion.ul
      variants={variants}
      className="absolute inset-0 flex flex-col items-start gap-y-8 px-8 py-6"
    >
      {options.map((item, index) => (
        <MenuItem
          key={`${index}`}
          index={index}
          item={item}
          onClick={() => handleNavigation(item.pathname)}
        />
      ))}
    </motion.ul>
  );
}
