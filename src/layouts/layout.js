import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import clsx from 'clsx';

import DesktopNav from '@/components/DesktopNav/DesktopNav';
import MobileNav from '@/components/MobileNav/MobileNav';

import NowPlaying from '@/components/NowPlaying';
import ThemeToggle from '@/components/ThemeToggle';
import CommandPalette from '@/components/CommandPalette';

import Link from '@/components/Common/Link';
import { GithubIcon } from '@/components/Common/Icons';

export default function Layout(props) {
  const { children } = props;
  const router = useRouter();

  return (
    <div
      className={clsx(
        'flex h-screen flex-col items-center',
        'bg-zinc-50 text-zinc-700 dark:bg-black dark:text-zinc-300'
      )}
    >
      <header
        className={clsx(
          'm-6 flex w-11/12 items-center justify-between p-2 sm:max-w-[686px]',
          'rounded-xl md:bg-zinc-200/60 md:dark:bg-zinc-900'
        )}
      >
        <DesktopNav />
        <MobileNav />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CommandPalette />
        </div>
      </header>

      <motion.main
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2 },
        }}
        className="relative w-11/12 flex-grow pb-12 text-zinc-700 dark:text-zinc-300 sm:max-w-[686px]"
      >
        {children}
      </motion.main>

      {router.pathname !== '/' && (
        <footer
          className={clsx(
            'flex w-11/12 flex-col gap-6 pt-6 pb-8 sm:max-w-[686px]',
            'border-t border-dashed border-zinc-300 dark:border-zinc-700'
          )}
        >
          <NowPlaying />

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
              <GithubIcon className="h-6 w-6" />
              <span className="text-sm sm:text-base">/destroymayor/jared</span>
            </Link>
          </div>
        </footer>
      )}
    </div>
  );
}