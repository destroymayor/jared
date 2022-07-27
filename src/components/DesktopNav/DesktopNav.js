import { useRouter } from 'next/router';
import { dashboard, projects, snippets, uses } from '@/data/routes';

import clsx from 'clsx';
import Tabs from '@/components/Tabs';

export default function DesktopNav() {
  const router = useRouter();

  const routes = [dashboard, projects, snippets, uses];

  const handleNavigation = (pathname) => {
    router.push(pathname);
  };

  return (
    <div className="hidden h-10 items-center md:flex">
      <Tabs shouldResetHighlight>
        {routes.map((tab) => (
          <Tabs.Tab
            key={tab.pathname}
            name={tab.title}
            onClick={() => handleNavigation(tab.pathname)}
          >
            <div
              className={clsx(
                'flex items-center',
                tab.pathname === router.pathname
                  ? 'bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text font-semibold text-transparent'
                  : 'text-zinc-700 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-300'
              )}
            >
              {tab.title}
            </div>
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
}
