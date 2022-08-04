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

  if (!isPlaying) {
    return (
      <div className="flex items-center gap-4">
        <SpotifySolidIcon className="h-7 w-7" />
        <div className="flex flex-col">
          <span className="text-sm">Not Playing</span>
          <span className="text-sm dark:text-zinc-400">Spotify</span>
        </div>
      </div>
    );
  }

  return (
    <Link href={songUrl}>
      <div className="flex  items-center gap-3">
        {albumImageUrl && (
          <Image
            className="h-[60px] w-[60px] rounded-md"
            alt={album}
            src={albumImageUrl}
            width={60}
            height={60}
          />
        )}

        <div className="flex flex-col items-start justify-center">
          <PlayingBars />
          <p className="w-64 truncate text-sm sm:w-52">{songTitle}</p>
          <p className="w-64 truncate text-sm text-zinc-500 dark:text-zinc-400 sm:w-3/4">
            {artist}
          </p>
        </div>
      </div>
    </Link>
  );
}
