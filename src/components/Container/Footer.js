import NowPlaying from '@/components/NowPlaying';
import Link from '@/components/Link';
import { GithubOutlineIcon } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="mt-12 flex w-11/12 flex-col gap-6 border-t border-dashed border-zinc-300 py-6 dark:border-zinc-700 sm:max-w-[686px]">
      <NowPlaying />

      <div className="flex flex-col items-start gap-2 dark:text-zinc-400">
        <Link
          href="https://github.com/destroymayor/jared"
          className="flex items-center gap-2 transition duration-200 ease-in-out dark:hover:text-zinc-50"
        >
          <GithubOutlineIcon className="h-4 w-4" />
          <span className="text-sm">Designed & Built by Jared</span>
        </Link>

        <div className="flex items-center gap-2 text-sm sm:text-base">
          <span className="text-lg">©</span>
          <span>{new Date().getFullYear()}</span>
          <span className="text-zinc-400 dark:text-zinc-600">-</span>
          <span>
            <span>he</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span>him</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
