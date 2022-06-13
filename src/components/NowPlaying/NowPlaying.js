import Image from 'next/image';

import useSWR from 'swr';

import clsx from 'clsx';
import PlayingBars from '@/components/NowPlaying/PlayingBars';
import Link from '@/components/Link';
import { SpotifySolidIcon } from '@/components/Icons';

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing');

  const isLoading = !data;
  const isPlaying = data?.isPlaying;

  const songUrl = data?.songUrl;
  const songTitle = data?.title;
  const artist = data?.artist;
  const album = data?.album;
  const albumImageUrl = data?.albumImageUrl;

  return (
    <div className="flex flex-row-reverse items-center gap-3 lg:flex-col">
      <div
        className={clsx(
          'flex flex-col-reverse items-start lg:items-center',
          isLoading ? 'invisible' : 'visible'
        )}
      >
        <div
          className={clsx(
            'flex w-52 flex-col truncate text-sm sm:w-auto',
            isPlaying ? 'lg:hidden' : 'hidden'
          )}
        >
          <Link href={songUrl ?? '#'} className="hover:underline">
            {songTitle}
          </Link>
          <span className="text-zinc-500 dark:text-zinc-400">{artist}</span>
        </div>

        <div
          className={clsx(
            'transform dark:text-zinc-400 lg:w-auto lg:-rotate-180 lg:[writing-mode:vertical-lr]',
            isPlaying ? 'hidden' : ''
          )}
        >
          Not Playing
        </div>

        {isPlaying && <PlayingBars />}
      </div>

      {isPlaying && albumImageUrl ? (
        <Link href={songUrl} className="flex h-[60px] w-[60px]">
          <Image
            className="rounded-md"
            unoptimized
            alt={album}
            src={albumImageUrl}
            width={60}
            height={60}
          />
        </Link>
      ) : (
        <div
          className={clsx(
            'flex h-[60px] w-[60px] items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 lg:border-0',
            isLoading ? 'invisible' : 'visible'
          )}
        >
          <SpotifySolidIcon className="h-7 w-7" />
        </div>
      )}
    </div>
  );
}
