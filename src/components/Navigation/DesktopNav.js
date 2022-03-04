import { useRouter } from 'next/router';

import clsx from 'clsx';

import Link from '@/components/Common/Link';
import Tabs from '@/components/Common/Tabs';

export default function DesktopNav(props) {
  const { routes = [] } = props;
  const router = useRouter();

  return (
    <div className="hidden h-10 items-center md:flex">
      <Tabs data={routes}>
        {({ item }) => (
          <Link
            className={clsx(
              `${item.pathname === router.pathname && 'font-semibold'}`,
              'cursor-pointer p-2 text-gray-700 transition duration-100 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-300'
            )}
            href={item?.pathname}
            aria-label={item.title}
          >
            {item?.title}
          </Link>
        )}
      </Tabs>
    </div>
  );
}
