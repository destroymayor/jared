import { memo } from 'react';

import Link from '@/components/Common/Link';
import ThemeToggle from '@/components/Layout/ThemeToggle';

const DesktopNav = (props) => {
  const { routes = [] } = props;

  return (
    <ul className="items-center hidden h-10 sm:flex">
      {routes.map((item, index) => (
        <li className="flex justify-center mx-1" key={`${index}`}>
          <Link
            className={`px-2 py-1 transition duration-200 ease-in-out rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300`}
            href={item.pathname}
            aria-label={item.title}
          >
            {item.title}
          </Link>
        </li>
      ))}
      <li className="flex flex-col justify-center mx-2">
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default memo(DesktopNav);
