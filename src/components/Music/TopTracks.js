import Image from 'next/image';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Link from '@/components/Common/Link';

const TopTracks = () => {
  const { data } = useSWR('/api/top-tracks', fetcher);

  const isLoading = !data;

  return (
    <div className="flex flex-col mt-6 gap-y-2">
      <h2 className="text-2xl">Top Tracks</h2>
      <p className="dark:text-gray-400">{`Here's my top tracks on Spotify updated daily.`}</p>

      {isLoading ? (
        <div className="flex items-center animate-pulse gap-x-3">
          <div className="w-4 h-6 bg-gray-600 rounded-md"></div>
          <div className="w-[60px] h-[60px] bg-gray-600 rounded-md"></div>
          <div className="flex flex-col gap-2">
            <div className="w-24 h-4 bg-gray-600 rounded-md"></div>
            <div className="w-48 h-4 bg-gray-600 rounded-md"></div>
          </div>
        </div>
      ) : (
        <ul className="flex flex-col gap-y-2">
          {data?.tracks?.map((item, index) => (
            <li
              key={`${item.title} - ${item.artist} - ${index}`}
              className="flex items-center border-b-[1px] border-gray-400 dark:border-gray-600 py-2"
            >
              <div className="w-5 text-center dark:text-gray-400">{index + 1}</div>

              <div className="w-[64px] h-[64px] mx-2">
                <Image
                  className="rounded-md"
                  unoptimized
                  alt={item?.album?.name}
                  src={item?.album?.image?.url}
                  width={60}
                  height={60}
                />
              </div>
              <div className="flex flex-col flex-grow w-3/5 md:w-full">
                <Link className="font-medium truncate md:overflow-clip" href={item?.songUrl}>
                  {item.title}
                </Link>
                <p className="text-gray-500 truncate dark:text-gray-400 md:overflow-clip">
                  {item?.artist ?? 'Spotify'}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopTracks;
