import { useRouter } from 'next/router';
import Link from 'next/link';
import { dashboard, projects, snippets, guestbook } from '@/data/routes';

import clsx from 'clsx';
import Tabs from '@/components/Tabs';

export default function DesktopNav() {
  const router = useRouter();

  const routes = [dashboard, projects, snippets, guestbook];

  return (
    <nav className="hidden items-center sm:flex">
      <Tabs shouldResetHighlight>
        {routes.map((tab) => (
          <Tabs.Tab key={tab.pathname} name={tab.title}>
            <Link href={tab.pathname}>
              <div
                className={clsx(
                  'flex items-center p-2',
                  tab.pathname === router.pathname
                    ? 'bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent'
                    : 'text-zinc-700 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-300'
                )}
              >
                {tab.title}
              </div>
            </Link>
          </Tabs.Tab>
        ))}
      </Tabs>
    </nav>
  );
}
