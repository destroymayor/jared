import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

import { SpotifySolidIcon } from '@/components/Icons';

type TopTracksTypes = {
  title: string;
  artist: string;
  songUrl: string;
  album: {
    name: string;
    image: {
      url: string;
    };
  };
};

export default function TopTracks() {
  const { data, isLoading } = useSWR<TopTracksTypes[]>('/api/spotify/top-tracks', {
    revalidateOnFocus: false,
  });

  if (!data) return null;

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <SpotifySolidIcon className="h-6 w-6" />
        <span>Top Tracks</span>
      </h2>
      <p className="pb-2 dark:text-zinc-400">{`Here's my top tracks on Spotify updated daily.`}</p>

      {isLoading ? (
        <div className="flex flex-col gap-3">
          <div className="h-[76px] w-full animate-pulse rounded-2xl bg-zinc-300 dark:bg-zinc-800" />
          <div className="h-[76px] w-full animate-pulse rounded-2xl bg-zinc-300 dark:bg-zinc-800" />
        </div>
      ) : (
        <ul>
          {data?.map((item, index) => (
            <li key={`${item.title} - ${item.artist}`}>
              <Link
                href={item?.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2"
              >
                <span className="w-5 text-center dark:text-zinc-400">{index + 1}</span>

                <Image
                  className="min-h-[60px] min-w-[60px] rounded-md"
                  alt={item?.album?.name}
                  src={item?.album?.image?.url}
                  width={60}
                  height={60}
                />
                <div className="flex w-3/5 flex-grow flex-col md:w-full">
                  <div className="truncate font-medium md:overflow-clip">{item.title}</div>
                  <p className="truncate text-sm text-zinc-500 dark:text-zinc-400 md:overflow-clip">
                    {item?.artist ?? 'Spotify'}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
