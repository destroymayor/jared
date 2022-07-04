import { useRouter } from 'next/router';
import routes from '@/data/routes';

import clsx from 'clsx';

import Tabs from '@/components/Tabs';
import Link from '@/components/Link';

export default function DesktopNav() {
  const router = useRouter();

  return (
    <div className="hidden h-10 items-center md:flex">
      <Tabs>
        {routes.map((tab) => (
          <Tabs.Tab key={tab.pathname} value={tab}>
            <Link
              className={clsx(
                'flex items-center p-2',
                tab.pathname === router.pathname
                  ? 'bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text font-semibold text-transparent'
                  : 'text-zinc-700 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-300'
              )}
              href={tab.pathname}
            >
              {tab.title}
            </Link>
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
}
