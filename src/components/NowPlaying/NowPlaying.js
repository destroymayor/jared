import Image from 'next/image';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import PlayingBars from '@/components/NowPlaying/PlayingBars';
import Link from '@/components/Common/Link';
import { SpotifySolidIcon } from '@/components/Common/Icons';

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <div className="flex items-center gap-3 py-2">
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

      <div className="flex w-3/5 flex-auto flex-col md:w-full">
        {data?.songUrl && <PlayingBars />}

        <div className="flex flex-col">
          {data?.songUrl ? (
            <Link className="truncate font-medium md:overflow-clip" href={data?.songUrl}>
              {data.title}
            </Link>
          ) : (
            <p className="flex items-center gap-2">
              <SpotifySolidIcon className="h-5 w-5" />
              <span className="font-bold">Not Playing</span>
              <span className="text-zinc-400">- Spotify</span>
            </p>
          )}

          <p className="max-w-max truncate text-zinc-500 dark:text-zinc-400 md:overflow-clip">
            {data?.artist}
          </p>
        </div>
      </div>
    </div>
  );
}
