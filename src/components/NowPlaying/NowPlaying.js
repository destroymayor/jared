import Image from 'next/image';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import AnimatedBars from '@/components/NowPlaying/AnimatedBars';
import Link from '@/components/Common/Link';
import { SpotifyIcon } from '@/components/Common/Icons';

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing', fetcher);

  const isLoading = !data;

  if (isLoading)
    return (
      <div className="flex animate-pulse items-center gap-x-3">
        <div className="h-14 w-14 rounded-md bg-gray-600"></div>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-12 rounded-md bg-gray-600"></div>
          <div className="h-4 w-32 rounded-md bg-gray-600"></div>
        </div>
      </div>
    );

  return (
    <section className="flex items-center gap-x-3">
      {data?.albumImageUrl ? (
        <div className="flex h-[60px] w-[60px] flex-none items-center justify-center">
          <Image
            className="rounded-md"
            unoptimized
            alt={data?.album}
            src={data?.albumImageUrl}
            width={60}
            height={60}
          />
        </div>
      ) : (
        <div className="h-6 w-6 flex-none">
          <SpotifyIcon className="h-6 w-6" />
        </div>
      )}

      <div className="flex w-3/5 flex-auto flex-col gap-y-1 md:w-full">
        {data?.songUrl && <AnimatedBars />}
        <div className="flex flex-col">
          {data?.songUrl ? (
            <Link className="truncate font-medium md:overflow-clip" href={data?.songUrl}>
              {data.title}
            </Link>
          ) : (
            <p className="font-medium">Not Playing</p>
          )}
          <p className="max-w-max truncate text-gray-500 dark:text-gray-400 md:overflow-clip">
            {data?.artist ?? 'Spotify'}
          </p>
        </div>
      </div>
    </section>
  );
}
