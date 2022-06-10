import router from 'next/router';

import routes, { home } from '@/data/routes';

import { motion, useCycle } from 'framer-motion';
import useScrollDisabler from '@/hooks/use-scroll-disabler.hook';

import InPortal from '@/components/InPortal';
import Backdrop from '@/components/MobileNav/Backdrop';
import MenuToggle from '@/components/MobileNav/MenuToggle';
import Menu from '@/components/MobileNav/Menu';
import MenuItem from '@/components/MobileNav/MenuItem';
import ThemeToggle from '@/components/ThemeToggle';

const variants = {
  open: { opacity: 1, visibility: 'visible' },
  closed: {
    opacity: 0,
    visibility: 'hidden',
    transition: { delay: 0.8 },
  },
};

export default function MobileNav() {
  const [isOpen, toggle] = useCycle(false, true);

  useScrollDisabler(isOpen);

  const handleNavigation = (pathname) => {
    router.push(pathname);
    toggle();
  };

  const menuOptions = [home, ...routes];

  return (
    <>
      <MenuToggle open={isOpen} onClick={toggle} />

      <InPortal>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          className="absolute inset-0 z-[999] md:hidden"
        >
          <Backdrop />
          <Menu>
            {menuOptions.map((item, index) => (
              <MenuItem key={`${index}`} onClick={() => handleNavigation(item.pathname)}>
                {item.title}
              </MenuItem>
            ))}
            <MenuItem className="pt-10">
              <ThemeToggle />
            </MenuItem>
          </Menu>
        </motion.nav>
      </InPortal>
    </>
  );
}
