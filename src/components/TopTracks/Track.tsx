import Image from 'next/image';
import Link from 'next/link';

import { TrackTypes } from './types';

type TrackProps = {
  data: TrackTypes;
  index: number;
};

export const TrackPlaceholder = () => {
  const placeholderItems = [...Array(4).keys()];

  return (
    <div className="flex flex-col">
      {placeholderItems.map((item) => (
        <div key={item} className="flex h-[76px] w-full items-center gap-4">
          <div className="h-10 w-5 animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-800"></div>
          <div className="min-h-[60px] min-w-[60px] animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-800" />
          <div className="flex w-3/5 flex-grow flex-col gap-2 md:w-full">
            <div className="h-5 w-3/4 animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-800" />
            <div className="h-5 w-2/4 animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-800" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Track(props: TrackProps) {
  const { data, index } = props;
  const { title, artist, songUrl, album } = data;
  const { name, image } = album;

  return (
    <li key={`${title} - ${artist}`}>
      <Link
        href={songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 py-2"
      >
        <span className="w-5 text-center dark:text-zinc-400">{index + 1}</span>

        <Image
          className="min-h-[60px] min-w-[60px] rounded-md"
          alt={name}
          src={image.url}
          width={60}
          height={60}
        />
        <div className="flex w-3/5 flex-grow flex-col md:w-full">
          <div className="truncate font-medium md:overflow-clip">{title}</div>
          <p className="truncate text-sm text-zinc-500 dark:text-zinc-400 md:overflow-clip">
            {artist ?? 'Spotify'}
          </p>
        </div>
      </Link>
    </li>
  );
}
