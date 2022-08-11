import Link from 'next/link';

import {
  home,
  dashboard,
  projects,
  bookmarks,
  uses,
  snippets,
  blog,
  guestbook,
} from '@/data/routes';

import NowPlaying from '@/components/NowPlaying';

export default function Footer() {
  const routes = [home, dashboard, projects, uses, guestbook, snippets, blog, bookmarks];

  return (
    <footer className="mt-12 flex w-full max-w-2xl flex-col items-start gap-6 border-t border-dashed border-zinc-300 py-6 dark:border-zinc-700">
      <NowPlaying />

      <ul className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
        {routes.map((route) => (
          <li
            key={route.pathname}
            className="text-zinc-500 transition-colors duration-300 ease-in-out hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            <Link href={route.pathname}>{route.title}</Link>
          </li>
        ))}
      </ul>

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
