import routes from '@/data/routes';

import { motion, useCycle } from 'framer-motion';
import useScrollDisabler from '@/hooks/use-scroll-disabler.hook';

import InPortal from '@/components/InPortal';
import Backdrop from '@/components/MobileNav/Backdrop';
import MenuToggle from '@/components/MobileNav/MenuToggle';
import Menu from '@/components/MobileNav/Menu';

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

  return (
    <>
      <MenuToggle open={isOpen} onClick={toggle} />

      <InPortal>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          className="absolute inset-x-0 top-[90px] bottom-0 md:hidden"
        >
          <Backdrop />
          <Menu options={routes} onClose={toggle} />
        </motion.nav>
      </InPortal>
    </>
  );
}
