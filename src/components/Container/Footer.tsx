import Image from 'next/future/image';
import Link from 'next/link';

import avatar from '@/public/images/avatar.webp';

import NowPlaying from '@/components/NowPlaying';

export default function Footer() {
  return (
    <footer className="mt-10 flex w-full max-w-2xl flex-col items-start gap-6 px-4 py-10">
      <hr className="h-1 w-full border-t border-zinc-300 dark:border-zinc-700" />
      <NowPlaying />

      <Link href="https://github.com/destroymayor" passHref>
        <a className="flex items-center gap-2 text-sm transition duration-300 ease-in-out dark:text-zinc-400 dark:hover:text-zinc-100">
          <Image
            className="cursor-pointer"
            priority
            src={avatar}
            alt="Jared"
            width={25}
            height={25}
          />
          <span>
            Jared Chen
            <span className="text-zinc-400 dark:text-zinc-500">,</span>
          </span>
          <span className="text-xl">©</span>
          <span>{new Date().getFullYear()}</span>
        </a>
      </Link>
    </footer>
  );
}
