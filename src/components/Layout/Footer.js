import { useRouter } from 'next/router';

import clsx from 'clsx';
import Link from '@/components/Common/Link';
import NowPlaying from '@/components/NowPlaying';

import { GithubIcon } from '@/components/Common/Icons';

export default function Footer() {
  const router = useRouter();

  if (router.pathname === '/') return null;

  return (
    <footer
      className={clsx(
        'flex w-11/12 flex-col gap-4 pt-6 pb-8 sm:max-w-[686px]',
        'border-t border-dashed border-zinc-300 dark:border-zinc-700'
      )}
    >
      <NowPlaying />

      <div className="flex flex-wrap items-center justify-between gap-6">
        <span className="flex items-center gap-2 text-sm sm:text-base">
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
          <span className="text-sm sm:text-base">/destroymayor/jared</span>
        </Link>
      </div>
    </footer>
  );
}
