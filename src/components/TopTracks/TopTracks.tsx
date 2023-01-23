import useSWR from 'swr';

import Track, { TrackPlaceholder } from './Track';
import { SpotifySolidIcon } from '@/components/Icons';
import { TrackTypes } from './types';

export default function TopTracks() {
  const { data, isLoading } = useSWR<TrackTypes[]>('/api/spotify/top-tracks', {
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
        <TrackPlaceholder />
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
