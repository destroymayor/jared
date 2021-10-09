import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Link from '@/components/Common/Link';
import { SpotifyIcon } from '@/components/Common/Icons';

const NowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <div className="flex items-center gap-x-3">
      <span className="w-6 h-6">
        <SpotifyIcon className="w-6 h-6" />
      </span>
      <div className="flex flex-wrap">
        {data?.songUrl ? (
          <Link className="font-medium truncate" href={data?.songUrl}>
            {data.title}
          </Link>
        ) : (
          <p className="font-medium">Not Playing</p>
        )}
        <span className="mx-2 ">{' – '}</span>
        <p className="text-gray-500 truncate dark:text-gray-400 max-w-max">
          {data?.artist ?? 'Spotify'}
        </p>
      </div>
    </div>
  );
};

export default NowPlaying;
