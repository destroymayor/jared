import router from 'next/router';

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
        <div
          className={clsx(
            `${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`,
            'h-full w-full md:hidden'
          )}
        >
          {/* backdrop */}
          <div
            className={clsx(
              `${isOpen ? 'opacity-100' : 'opacity-0'}`,
              'absolute inset-x-0 top-20 bottom-0 bg-gray-50 transition duration-500 dark:bg-black dark:bg-opacity-80 dark:backdrop-blur',
              'motion-safe:transition-opacity motion-safe:duration-500'
            )}
          />

          <nav
            className={clsx(
              `${isOpen ? 'opacity-100 dark:bg-opacity-70' : 'opacity-0'}`,
              'absolute inset-x-0 top-20 bottom-0 bg-gray-50 dark:bg-black'
            )}
          >
            <ul
              className={clsx(
                'flex flex-col items-start gap-y-8 px-8 py-6 transition duration-300 ease-in',
                `${isOpen ? 'opacity-100' : 'opacity-0'}`
              )}
            >
              {routes.map((item, index) => (
                <li
                  key={`${index}`}
                  className={clsx(
                    'transition duration-300 ease-in',
                    `${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'}`
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => handleNavigation(item.pathname)}
                >
                  <div
                    className={clsx(
                      'flex cursor-pointer text-2xl text-black transition duration-200 ease-in-out hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-400'
                    )}
                  >
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </InPortal>
    </>
  );
}
