'use client';

import Image from 'next/image';
import Link from 'next/link';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { NowPlayingType } from '@/lib/spotify';
import PlayingBars from '@/components/NowPlaying/PlayingBars';
import { SpotifySolidIcon } from '@/components/Icons';
import clsx from 'clsx';
import Skeleton from './Skeleton';

export default function NowPlaying() {
  const { data, isLoading } = useSWR<NowPlayingType>('/api/spotify/now-playing', fetcher);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <Link href={data?.songUrl ?? '#'} target="_blank" rel="noopener noreferrer">
      <div className={clsx('flex items-center gap-3', { 'h-[60px]': !data?.isPlaying })}>
        {data?.albumImageUrl ? (
          <Image
            className="h-[60px] w-[60px] rounded-md"
            alt={`${data?.album}`}
            src={data?.albumImageUrl}
            width={60}
            height={60}
          />
        ) : (
          <SpotifySolidIcon className="h-7 w-7" />
        )}

        <div className="flex flex-col items-start justify-center">
          {data?.isPlaying && <PlayingBars />}
          <p className="w-64 truncate text-sm sm:w-80">{data?.title ?? 'Not Playing'}</p>
          <p className="w-64 truncate text-sm text-zinc-500 dark:text-zinc-400 sm:w-80">
            {data?.artist ?? 'Spotify'}
          </p>
        </div>
      </div>
    </Link>
  );
}
