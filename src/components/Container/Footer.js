import { home, bookmarks, uses, snippets, blog, guestbook } from '@/data/routes';

import NowPlaying from '@/components/NowPlaying';
import Link from '@/components/Link';

export default function Footer() {
  const routes = [home, bookmarks, uses, snippets, guestbook, blog];

  return (
    <footer className="mt-12 flex w-full max-w-2xl flex-col items-start gap-8 border-t border-dashed border-zinc-300 py-6 dark:border-zinc-700">
      <NowPlaying />

      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
        {routes.map((route) => (
          <Link
            key={route.pathname}
            href={route.pathname}
            className="text-zinc-500 transition-colors duration-300 ease-in-out hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300"
          >
            {route.title}
          </Link>
        ))}
      </div>

      <div className="flex items-end gap-2 text-sm dark:text-zinc-400">
        <span className="text-xl">©</span>
        <span>{new Date().getFullYear()}</span>
        <span className="text-zinc-400 dark:text-zinc-600">-</span>
        <span>
          <span>he</span>
          <span className="text-zinc-400 dark:text-zinc-600">/</span>
          <span>him</span>
        </span>
      </div>
    </footer>
  );
}
