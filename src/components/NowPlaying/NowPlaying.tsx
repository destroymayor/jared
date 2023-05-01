'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import PlayingBars from '@/components/NowPlaying/PlayingBars';
import { SpotifySolidIcon } from '@/components/Icons';

import Skeleton from './Skeleton';
import { NowPlayingType } from './types';

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingType>('/api/spotify/now-playing', fetcher, {
    suspense: true,
  });

  return (
    <Suspense fallback={<Skeleton />}>
      {!data?.isPlaying ? (
        <div className="flex h-[60px] items-center gap-4">
          <SpotifySolidIcon className="h-7 w-7" />
          <div className="flex flex-col">
            <span className="text-sm">Not Playing</span>
            <span className="text-sm dark:text-zinc-400">Spotify</span>
          </div>
        </div>
      ) : (
        <Link href={data.songUrl ?? '#'} target="_blank" rel="noopener noreferrer">
          <div className="flex  items-center gap-3">
            {data.albumImageUrl && (
              <Image
                className="h-[60px] w-[60px] rounded-md"
                alt={`${data.album}`}
                src={data.albumImageUrl}
                width={60}
                height={60}
              />
            )}

            <div className="flex flex-col items-start justify-center">
              <PlayingBars />
              <p className="w-64 truncate text-sm sm:w-80">{data.title}</p>
              <p className="w-64 truncate text-sm text-zinc-500 dark:text-zinc-400 sm:w-80">
                {data.artist}
              </p>
            </div>
          </div>
        </Link>
      )}
    </Suspense>
  );
}
