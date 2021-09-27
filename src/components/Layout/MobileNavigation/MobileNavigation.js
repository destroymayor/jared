import { memo } from 'react';
import router from 'next/router';
import { useTrail, animated } from 'react-spring';

import useToggle from '@/hooks/utils/use-toggle.hook';
import useScrollDisabler from '@/hooks/utils/use-scroll-disabler.hook';

import InPortal from '@/components/Common/InPortal/InPortal';
import ThemeToggle from '@/components/Layout/ThemeToggle';

import { XIcon, MenuIcon } from '@heroicons/react/solid';

const MobileNavigation = (props) => {
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
        className="p-1 transition duration-200 ease-in-out rounded-md  sm:hidden hover:bg-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300"
        onClick={handleToggle}
      >
        <MenuIcon aria-label="Menu button" className="w-8 h-8 cursor-pointer" />
      </button>

      <InPortal>
        <div className={`${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} sm:hidden`}>
          <div
            className={`${
              isOpen ? 'opacity-100' : 'opacity-0'
            } w-full h-full absolute inset-0 transition duration-500 dark:backdrop-blur-md`}
          />

          <nav
            className={`${
              isOpen ? 'opacity-100 dark:bg-opacity-70' : 'opacity-0'
            } w-full h-full absolute inset-0 bg-gray-200 dark:bg-gray-800`}
          >
            <div className="flex justify-end px-8 py-9">
              <button
                className="text-gray-700 transition duration-200 ease-in-out rounded-md dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                onClick={handleToggle}
              >
                <XIcon aria-label="Close menu button" className="w-8 h-8" />
              </button>
            </div>

            <ul className="flex flex-col items-start px-8 py-6 gap-y-8">
              {trail.map((style, index) => {
                const { title, pathname } = routes[index];

                return (
                  <animated.li
                    style={style}
                    key={`${index}`}
                    onClick={() => handleNavigation(pathname)}
                  >
                    <div className="flex text-2xl transition duration-200 ease-in-out cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                      {title}
                    </div>
                  </animated.li>
                );
              })}

              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </InPortal>
    </>
  );
};

export default memo(MobileNavigation);
