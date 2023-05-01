import Image from 'next/image';
import Link from 'next/link';

import { TrackType } from './types';

export default function Track(props: { data: TrackType; index: number }) {
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
