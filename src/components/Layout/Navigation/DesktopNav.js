import { memo } from 'react';

import Link from '@/components/Common/Link';
import Tabs from '@/components/Common/Tabs';
import ThemeToggle from '@/components/Layout/ThemeToggle';

const DesktopNav = (props) => {
  const { routes = [] } = props;

  return (
    <div className="items-center hidden h-10 sm:flex">
      <Tabs data={routes}>
        {({ item }) => (
          <>
            <Link
              className="p-2 text-gray-700 transition duration-100 cursor-pointer dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-300"
              href={item?.pathname}
              aria-label={item.title}
            >
              {item?.title}
            </Link>
          </>
        )}
      </Tabs>

      <div className="flex justify-center mx-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default memo(DesktopNav);
