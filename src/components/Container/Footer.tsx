import Link from 'next/link';

import NowPlaying from '@/components/NowPlaying';

export default function Footer() {
  return (
    <footer className="py-10 px-4">
      <hr className="h-1 border-t border-dashed border-zinc-300 py-4 dark:border-zinc-700" />

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <NowPlaying />

        <Link
          href="https://github.com/destroymayor"
          className="flex items-center gap-2 text-sm transition duration-300 ease-in-out dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <span>
            Jared Chen
            <span className="text-zinc-400 dark:text-zinc-500">,</span>
          </span>
          <span className="text-xl">©</span>
          <span>{new Date().getFullYear()}</span>
        </Link>
      </div>
    </footer>
  );
}
