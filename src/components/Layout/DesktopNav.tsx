import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ROUTES from '@/constants/routes';

import clsx from 'clsx';
import Tabs from '@/components/Tabs';

export default function DesktopNav() {
  const pathname = usePathname();

  const routes = [ROUTES.DASHBOARD, ROUTES.PROJECTS, ROUTES.PHOTOS, ROUTES.SNIPPETS];

  return (
    <nav className="hidden items-center sm:flex">
      <Tabs shouldResetHighlight>
        {routes.map((tab) => (
          <Tabs.Tab key={tab.pathname} name={tab.title}>
            <Link href={tab.pathname}>
              <div
                className={clsx(
                  'flex items-center p-2',
                  tab.pathname === pathname
                    ? 'bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent'
                    : 'text-zinc-700 hover:text-zinc-700 dark:text-white dark:hover:text-white'
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
