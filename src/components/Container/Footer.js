import contact from '@/data/contact';
import NowPlaying from '@/components/NowPlaying';

import Link from '@/components/Link';
import { GithubIcon } from '@/components/FeatherIcons';

export default function Footer() {
  return (
    <footer className="mt-12 flex w-11/12 flex-col border-t border-dashed border-zinc-300 pt-8 pb-6 dark:border-zinc-700 sm:max-w-[686px]">
      <div className="relative flex flex-col gap-6 pb-6">
        <div className="flex items-center lg:fixed lg:bottom-0 lg:left-12 lg:flex-col">
          <NowPlaying />
          <div className="mt-4 hidden h-24 border-l border-zinc-300 dark:border-zinc-700 lg:block"></div>
        </div>

        <ul className="flex items-center gap-6 lg:fixed lg:bottom-0 lg:right-12 lg:flex-col lg:gap-4">
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
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 dark:text-zinc-400">
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

        <Link
          href="https://github.com/destroymayor/jared"
          className="flex items-center gap-1 transition duration-200 ease-in-out dark:hover:text-zinc-50"
        >
          <GithubIcon className="h-5 w-5" />
          <span className="text-sm sm:text-base">/destroymayor/jared</span>
        </Link>
      </div>
    </footer>
  );
}
