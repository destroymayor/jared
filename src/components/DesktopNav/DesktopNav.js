import { useRouter } from 'next/router';
import { home, dashboard, projects, snippets, bookmarks } from '@/data/routes';

import clsx from 'clsx';

import Link from '@/components/Link';
import Tabs from '@/components/Tabs';

export default function DesktopNav() {
  const routes = [home, dashboard, projects, bookmarks, snippets];
  const router = useRouter();

  return (
    <div className="hidden h-10 items-center md:flex">
      <Tabs data={routes}>
        {({ item }) => (
          <Link
            className={clsx(
              `${item.pathname === router.pathname && 'font-semibold'}`,
              'cursor-pointer p-2 text-zinc-700 transition duration-100 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-300'
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
