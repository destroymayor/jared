import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import clsx from 'clsx';
import Link from '@/components/Common/Link';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import CommandPalette from '@/components/CommandPalette';

import { GithubIcon } from '@/components/Common/Icons';

export default function Layout(props) {
  const { children } = props;
  const router = useRouter();

  return (
    <div
      className={clsx(
        'flex h-screen flex-col items-center',
        'bg-gray-50 text-gray-700 dark:bg-black dark:text-gray-300'
      )}
    >
      <header className={clsx('flex w-11/12 items-center justify-between py-8 sm:max-w-[686px]')}>
        <Navigation />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CommandPalette />
        </div>
      </header>

      <motion.main
        className="w-11/12 flex-grow pb-12 text-gray-700 dark:text-gray-300 sm:max-w-[686px]"
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { delay: 0.2 },
          },
        }}
      >
        {children}
      </motion.main>

      <footer
        className={clsx(
          `${router.pathname === '/' ? 'hidden' : 'flex'}`,
          'w-11/12 flex-wrap items-center justify-between gap-2 py-6 sm:max-w-[686px]',
          'border-t border-dashed border-zinc-300  dark:border-zinc-700'
        )}
      >
        <span className="flex items-center gap-2">
          <span>{new Date().getFullYear()}</span>
          <span className="text-zinc-400 dark:text-zinc-600">-</span>
          <span>
            he<span className="text-zinc-400 dark:text-zinc-600">/</span>him
          </span>
        </span>

        <Link
          href="https://github.com/destroymayor/jared"
          className="flex items-center gap-1  hover:text-zinc-500 dark:hover:text-zinc-400"
        >
          <GithubIcon className="h-6 w-6" />
          <span>/destroymayor/jared</span>
        </Link>
      </footer>
    </div>
  );
}
