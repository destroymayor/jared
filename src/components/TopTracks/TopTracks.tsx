'use client';

import { Suspense } from 'react';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Skeleton from './Skeleton';
import Track from './Track';
import { SpotifySolidIcon } from '@/components/Icons';
import { TrackType } from './types';

export default function TopTracks() {
  const { data } = useSWR<TrackType[]>('/api/spotify/top-tracks', fetcher, {
    revalidateOnFocus: false,
    suspense: true,
  });

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <SpotifySolidIcon className="h-6 w-6" />
        <span>Top Tracks</span>
      </h2>
      <p className="pb-2 dark:text-zinc-400">{`Here's my top tracks on Spotify updated daily.`}</p>

      <Suspense fallback={<Skeleton />}>
        <ul>
          {data?.map((item, index) => (
            <Track key={`${item.title} - ${item.artist}`} data={item} index={index} />
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
