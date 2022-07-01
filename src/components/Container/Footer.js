import contact from '@/data/contact';

import NowPlaying from '@/components/NowPlaying';
import Link from '@/components/Link';
import { GithubIcon } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="mt-12 flex w-11/12 flex-col gap-6 border-t border-dashed border-zinc-300 py-6 dark:border-zinc-700 sm:max-w-[686px]">
      <div className="relative flex flex-col-reverse gap-6">
        <ul className="flex items-center gap-6 lg:fixed lg:bottom-0 lg:left-12 lg:flex-col lg:gap-4">
          {contact.map((item) => (
            <li key={item.link}>
              <Link
                className="flex items-center gap-2 text-zinc-500 transition duration-200 ease-in-out hover:-translate-y-1 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-50 lg:p-1"
                href={item.link}
                aria-label={item.label}
              >
                {item.icon}
              </Link>
            </li>
          ))}
          <li className="hidden h-24 border-l border-zinc-300 dark:border-zinc-700 lg:block"></li>
        </ul>

        <div className="flex items-center lg:fixed lg:bottom-0 lg:right-12 lg:flex-col">
          <NowPlaying />
          <div className="mt-4 hidden h-24 border-l border-zinc-300 dark:border-zinc-700 lg:block"></div>
        </div>
      </div>

      <div className="flex flex-col flex-wrap items-start justify-between gap-4 dark:text-zinc-400 lg:items-center lg:gap-2">
        <Link
          href="https://github.com/destroymayor/jared"
          className="flex items-center transition duration-200 ease-in-out dark:hover:text-zinc-50"
        >
          <GithubIcon className="h-4 w-4" />
          <span className="px-1 text-zinc-400 dark:text-zinc-600">/</span>
          <span className="text-sm">Designed & Built by Jared</span>
        </Link>

        <span className="flex items-center gap-2 text-sm sm:text-base">
          <span className="text-lg">©</span>
          <span>{new Date().getFullYear()}</span>
          <span className="text-zinc-400 dark:text-zinc-600">-</span>
          <span>
            <span>he</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span>him</span>
          </span>
        </span>
      </div>
    </footer>
  );
}
