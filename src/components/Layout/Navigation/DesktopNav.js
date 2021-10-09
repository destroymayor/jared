import { memo } from 'react';

import { useRouter } from 'next/router';

import Link from '@/components/Common/Link';
import Tabs from '@/components/Common/Tabs';

const DesktopNav = (props) => {
  const { routes = [] } = props;
  const router = useRouter();

  return (
    <div className="items-center hidden h-10 sm:flex">
      <Tabs data={routes}>
        {({ item }) => (
          <>
            <Link
              className={`${
                item.pathname === router.pathname && 'font-semibold'
              } p-2 text-gray-700 transition duration-100 cursor-pointer dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-300`}
              href={item?.pathname}
              aria-label={item.title}
            >
              {item?.title}
            </Link>
          </>
        )}
      </Tabs>
    </div>
  );
};

export default memo(DesktopNav);
