import Image from 'next/future/image';

import useSWR from 'swr';

import PlayingBars from '@/components/NowPlaying/PlayingBars';
import Link from '@/components/Link';
import { SpotifySolidIcon } from '@/components/Icons';

export default function NowPlaying() {
  const { data } = useSWR('/api/spotify/now-playing');

  const isPlaying = data?.isPlaying;

  const songUrl = data?.songUrl ?? '#';
  const songTitle = data?.title;
  const artist = data?.artist;
  const album = data?.album;
  const albumImageUrl = data?.albumImageUrl;

  return (
    <div className="flex  items-center gap-3">
      {isPlaying && albumImageUrl ? (
        <Link href={songUrl} className="flex h-[60px] w-[60px]">
          <Image className="rounded-md" alt={album} src={albumImageUrl} width={60} height={60} />
        </Link>
      ) : (
        <div className="flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800">
          <SpotifySolidIcon className="h-7 w-7" />
        </div>
      )}

      <div className="flex flex-col items-start justify-center">
        {isPlaying ? (
          <>
            <PlayingBars />
            <div className="flex w-52 flex-col truncate text-sm sm:w-auto">
              <Link href={songUrl} className="hover:underline">
                {songTitle}
              </Link>
              <span className="text-zinc-500 dark:text-zinc-400">{artist}</span>
            </div>
          </>
        ) : (
          <div className="flex items-center">
            <span>Not Playing</span>
            <span className="text-sm dark:text-zinc-400"> - Spotify</span>
          </div>
        )}
      </div>
    </div>
  );
}
