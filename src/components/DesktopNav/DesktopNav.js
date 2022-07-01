import { useRouter } from 'next/router';
import routes from '@/data/routes';

import clsx from 'clsx';

import Tabs from '@/components/Tabs';

export default function DesktopNav() {
  const router = useRouter();

  return (
    <div className="hidden h-10 items-center md:flex">
      <Tabs>
        {routes.map((tab) => (
          <Tabs.Tab
            key={tab.pathname}
            value={tab.pathname}
            className={clsx(
              tab.pathname === router.pathname
                ? 'bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text font-semibold text-transparent'
                : 'text-zinc-700 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-300'
            )}
          >
            {tab.title}
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
}
