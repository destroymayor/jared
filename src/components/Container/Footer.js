import contact from '@/data/contact';
import NowPlaying from '@/components/NowPlaying';

import Link from '@/components/Link';
import { GithubIcon } from '@/components/FeatherIcons';

export default function Footer() {
  return (
    <footer className="mt-12 flex w-11/12 flex-col border-t border-dashed border-zinc-300 pt-8 pb-6 dark:border-zinc-700 sm:max-w-[686px]">
      <ul className="flex items-center gap-6 pb-6 lg:hidden">
        {contact.map((item) => (
          <li key={item.link}>
            <Link
              className="flex items-center gap-2 transition duration-200 ease-in-out hover:-translate-y-1 hover:text-zinc-400"
              href={item.link}
              aria-label={item.label}
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>

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
          className="flex items-center gap-1  hover:text-zinc-500 dark:hover:text-zinc-400"
        >
          <GithubIcon className="h-5 w-5" />
          <span className="text-sm sm:text-base">/destroymayor/jared</span>
        </Link>
      </div>

      <div className="relative hidden lg:block">
        <div className="fixed bottom-0 left-12 flex flex-col items-center">
          <NowPlaying />
          <div className="mt-4 h-24 border-l border-zinc-300 dark:border-zinc-700"></div>
        </div>
        <ul className="fixed bottom-0 right-12 flex flex-col items-center gap-4">
          {contact.map((item) => (
            <li key={item.link}>
              <Link
                className="flex items-center gap-2 p-1 text-zinc-500 transition duration-200 ease-in-out hover:-translate-y-1 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-50"
                href={item.link}
                aria-label={item.label}
              >
                {item.icon}
              </Link>
            </li>
          ))}
          <li className="h-24 border-l border-zinc-300 dark:border-zinc-700"></li>
        </ul>
      </div>
    </footer>
  );
}
