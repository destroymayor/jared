'use client';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { TrackType } from '@/lib/spotify';
import { SpotifySolidIcon } from '@/components/Icons';

import Skeleton from './Skeleton';
import Track from './Track';

export default function TopTracks() {
  const { data, isLoading } = useSWR<TrackType[]>('/api/spotify/top-tracks', fetcher, {
    revalidateOnFocus: false,
  });

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <SpotifySolidIcon className="h-6 w-6" />
        <span>Top Tracks</span>
      </h2>
      <p className="pb-2 dark:text-zinc-400">{`Here's my top tracks on Spotify updated daily.`}</p>

      {isLoading ? (
        <Skeleton />
      ) : (
        <ul>
          {data?.map((item, index) => (
            <Track key={`${item.title} - ${item.artist}`} data={item} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
}
