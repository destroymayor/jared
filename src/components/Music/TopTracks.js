import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Link from '@/components/Common/Link';

const TopTracks = () => {
  const { data } = useSWR('/api/top-tracks', fetcher);

  if (!data) return null;

  return (
    <div className="flex flex-col mt-12 gap-y-2 ">
      <h2 className="text-2xl">Top Tracks</h2>
      <p className="dark:text-gray-400">{`Here's my top tracks on Spotify updated daily.`}</p>
      <ul className="flex flex-col gap-y-6">
        {data?.tracks?.map((item, index) => (
          <li
            key={`${item.title} - ${item.artist}`}
            className="flex border-b-[1px] border-gray-400 dark:border-gray-600 py-2 gap-x-2"
          >
            <div className="dark:text-gray-400">{index + 1}</div>
            <div>
              {item?.songUrl ? (
                <Link className="font-medium truncate" href={item?.songUrl}>
                  {item.title}
                </Link>
              ) : (
                <p className="font-medium">Not Playing</p>
              )}
              <span className="mx-2 ">{'–'}</span>
              <span className="text-gray-500 dark:text-gray-400">{item?.artist ?? 'Spotify'}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTracks;
