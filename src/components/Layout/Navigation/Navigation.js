import { memo } from 'react';

import Link from '@/components/Common/Link';
import ThemeToggle from '@/components/Layout/ThemeToggle';
import MobileNav from '@/components/Layout/MobileNav/MobileNavigation';

const Navigation = () => {
  const routes = [
    {
      title: 'Projects',
      pathname: '/projects',
    },
    {
      title: 'Bookmarks',
      pathname: '/bookmarks',
    },
    {
      title: 'Music',
      pathname: '/music',
    },
    {
      title: 'Quotes',
      pathname: '/quotes',
    },
    // {
    //   title: 'Snippets',
    //   pathname: '/snippets',
    // },
  ];

  return (
    <>
      <MobileNav routes={routes} />

      <ul className="items-center hidden sm:flex">
        {routes.map((item, index) => (
          <li key={`${index}`}>
            <Link
              className={`flex flex-col mx-2 px-2 py-1 justify-center transition duration-200 ease-in-out rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300`}
              href={item.pathname}
              aria-label={item.title}
            >
              {item.icon}
              <span className="hidden sm:block">{item.title}</span>
            </Link>
          </li>
        ))}
        <li className="flex flex-col justify-center mx-2">
          <ThemeToggle />
        </li>
      </ul>
    </>
  );
};

export default memo(Navigation);
