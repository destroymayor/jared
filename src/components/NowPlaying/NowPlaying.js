import Image from 'next/image';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import PlayingBars from '@/components/NowPlaying/PlayingBars';
import Link from '@/components/Link';
import { SpotifySolidIcon } from '@/components/Icons';

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-end justify-center">
        <div className="-rotate-180 transform text-sm [writing-mode:vertical-lr]">
          {data?.songUrl ? (
            <Link href={data?.songUrl} className="hover:underline">
              {data.title}
            </Link>
          ) : (
            <span className="dark:text-zinc-400">Not Playing</span>
          )}
        </div>

        <p className="-rotate-180 transform text-sm text-zinc-500 [writing-mode:vertical-lr] dark:text-zinc-400">
          {data?.songUrl && data?.artist}
        </p>

        {data?.songUrl && (
          <div className="pb-2">
            <PlayingBars />
          </div>
        )}
      </div>

      {data?.albumImageUrl ? (
        <Link href={data?.songUrl}>
          <Image
            className="min-h-[60px] min-w-[60px] rounded-md"
            unoptimized
            alt={data?.album}
            src={data?.albumImageUrl}
            width={60}
            height={60}
          />
        </Link>
      ) : (
        <SpotifySolidIcon className="h-7 w-7" />
      )}
    </div>
  );
}
