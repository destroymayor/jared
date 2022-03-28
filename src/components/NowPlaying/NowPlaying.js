import Image from 'next/image';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import AnimatedBars from '@/components/NowPlaying/AnimatedBars';
import Link from '@/components/Common/Link';

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <div className="flex items-center gap-x-3 py-2">
      {data?.albumImageUrl && (
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
    </div>
  );
}
