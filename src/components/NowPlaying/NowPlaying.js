import Image from 'next/image';

import useSWR from 'swr';

import PlayingBars from '@/components/NowPlaying/PlayingBars';
import Link from '@/components/Link';
import { SpotifySolidIcon } from '@/components/Icons';

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing');

  return (
    <div className="flex flex-row-reverse items-center gap-3 lg:flex-col">
      <div className="flex max-h-72 flex-col-reverse items-start justify-center truncate lg:flex-row lg:items-end">
        <div className="transform text-sm lg:-rotate-180 lg:[writing-mode:vertical-lr]">
          {data?.songUrl ? (
            <Link href={data?.songUrl} className="hover:underline">
              {data.title}
            </Link>
          ) : (
            <span className="dark:text-zinc-400">Not Playing</span>
          )}
        </div>

        <p className="transform text-sm text-zinc-500 dark:text-zinc-400 lg:-rotate-180 lg:[writing-mode:vertical-lr]">
          {data?.songUrl && data?.artist}
        </p>

        {data?.songUrl && <PlayingBars />}
      </div>

      <div className="flex min-h-[60px] min-w-[60px] items-center justify-center">
        {data?.albumImageUrl ? (
          <Link href={data?.songUrl}>
            <Image
              className="rounded-md"
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
    </div>
  );
}
