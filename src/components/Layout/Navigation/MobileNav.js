import { memo } from 'react';
import router from 'next/router';
import { useTrail, animated } from 'react-spring';

import useToggle from '@/hooks/utils/use-toggle.hook';
import useScrollDisabler from '@/hooks/utils/use-scroll-disabler.hook';

import InPortal from '@/components/Common/InPortal';

import { XIcon, MenuIcon } from '@heroicons/react/solid';

const MobileNav = (props) => {
  const { routes = [] } = props;
  const [isOpen, toggle] = useToggle();

  useScrollDisabler(isOpen);

  const trail = useTrail(routes.length, {
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    config: {
      tension: 700,
      friction: isOpen ? 60 : 20,
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
        className="p-1 transition duration-200 ease-in-out rounded-md sm:hidden dark:hover:text-gray-100"
        onClick={handleToggle}
      >
        {isOpen ? (
          <XIcon aria-label="Close menu" className="w-8 h-8" />
        ) : (
          <MenuIcon aria-label={isOpen ? 'Close menu' : 'Open menu'} className="w-8 h-8" />
        )}
      </button>

      <InPortal>
        <div
          className={`${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          } w-full h-full sm:hidden`}
        >
          {/* backdrop */}
          <div
            className={`
            ${isOpen ? 'opacity-100' : 'opacity-0'}
            absolute top-24 bottom-0 inset-x-0 transition duration-500 bg-gray-200 dark:backdrop-blur dark:bg-opacity-80 dark:bg-gray-900 `}
          />

          <nav
            className={`
            ${
              isOpen ? 'opacity-100 dark:bg-opacity-70' : 'opacity-0'
            } absolute top-24 bottom-0 inset-x-0 bg-gray-200 dark:bg-gray-900`}
          >
            <ul className="flex flex-col items-start px-8 py-6 gap-y-8">
              {trail.map((style, index) => (
                <animated.li
                  style={style}
                  key={`${index}`}
                  onClick={() => handleNavigation(routes[index].pathname)}
                >
                  <div className="flex text-2xl text-black transition duration-200 ease-in-out cursor-pointer dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-400">
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
};

export default memo(MobileNav);