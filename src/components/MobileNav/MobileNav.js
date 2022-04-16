import router from 'next/router';

import routes from '@/data/routes';

import { motion, useCycle } from 'framer-motion';
import useScrollDisabler from '@/hooks/use-scroll-disabler.hook';

import MenuItem from '@/components/MobileNav/MenuItem';
import InPortal from '@/components/Common/InPortal';

import { XIcon, MenuIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import styles from '@/styles/mobile-menu.module.css';

export default function MobileNav() {
  const [isOpen, toggle] = useCycle(false, true);

  useScrollDisabler(isOpen);

  const handleToggle = () => toggle();

  const handleNavigation = (pathname) => {
    router.push(pathname);
    handleToggle();
  };

  return (
    <>
      <button
        className={clsx(
          styles['menu-button'],
          'visible relative h-8 w-8 border-0 bg-transparent transition-opacity duration-300 ease-in md:hidden'
        )}
        onClick={handleToggle}
        aria-label="Toggle menu"
      >
        <MenuIcon data-hide={isOpen} className="h-4 w-4" />
        <XIcon data-hide={!isOpen} className="h-4 w-4" />
      </button>

      <InPortal>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1 },
            closed: {
              opacity: 0,
              transition: { delay: 0.8 },
            },
          }}
          className="absolute inset-x-0 top-[90px] bottom-0 h-full w-full md:hidden"
        >
          {/* backdrop */}
          <motion.div
            variants={{
              open: { opacity: 1 },
              closed: {
                opacity: 0,
                transition: { delay: 0.8 },
              },
            }}
            className="absolute inset-0 bg-zinc-50 dark:bg-black dark:bg-opacity-90 dark:backdrop-blur"
          />

          <motion.ul
            variants={{
              open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
            className="absolute inset-0 flex flex-col items-start gap-y-8 px-8 py-6"
          >
            {routes.map((item, index) => (
              <MenuItem
                key={`${index}`}
                index={index}
                item={item}
                onClick={() => handleNavigation(item.pathname)}
              />
            ))}
          </motion.ul>
        </motion.nav>
      </InPortal>
    </>
  );
}
