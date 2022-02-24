import router from 'next/router';
import { useTrail, animated } from 'react-spring';

import useToggle from '@/hooks/use-toggle.hook';
import useScrollDisabler from '@/hooks/use-scroll-disabler.hook';

import InPortal from '@/components/Common/InPortal';

import { XIcon, MenuIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import styles from '@/styles/mobile-menu.module.css';

export default function MobileNav(props) {
  const { routes = [] } = props;
  const [isOpen, toggle] = useToggle();

  useScrollDisabler(isOpen);

  const trail = useTrail(routes.length, {
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    config: {
      tension: 700,
      friction: isOpen ? 50 : 20,
      clamp: true,
    },
  });

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
          'visible relative h-8 w-8 border-0 bg-transparent transition-opacity duration-300 ease-in sm:hidden'
        )}
        onClick={handleToggle}
        aria-label="Toggle menu"
      >
        <MenuIcon data-hide={isOpen} className="h-4 w-4" />
        <XIcon data-hide={!isOpen} className="h-4 w-4" />
      </button>

      <InPortal>
        <div
          className={`${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          } h-full w-full sm:hidden`}
        >
          {/* backdrop */}
          <div
            className={`
            ${isOpen ? 'opacity-100' : 'opacity-0'}
            absolute inset-x-0 top-24 bottom-0 bg-gray-50 transition duration-500 dark:bg-black dark:bg-opacity-80 dark:backdrop-blur`}
          />

          <nav
            className={`
            ${
              isOpen ? 'opacity-100 dark:bg-opacity-70' : 'opacity-0'
            } absolute inset-x-0 top-24 bottom-0 bg-gray-50 dark:bg-black`}
          >
            <ul className="flex flex-col items-start gap-y-8 px-8 py-6">
              {trail.map((style, index) => (
                <animated.li
                  style={style}
                  key={`${index}`}
                  onClick={() => handleNavigation(routes[index].pathname)}
                >
                  <div className="flex cursor-pointer text-2xl text-black transition duration-200 ease-in-out hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-400">
                    {routes[index].title}
                  </div>
                </animated.li>
              ))}
            </ul>
          </nav>
        </div>
      </InPortal>
    </>
  );
}
