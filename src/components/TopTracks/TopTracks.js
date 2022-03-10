import Image from 'next/image';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Link from '@/components/Common/Link';

export default function TopTracks() {
  const { data } = useSWR('/api/top-tracks', fetcher);

  const isLoading = !data;

  return (
    <section className="flex flex-col gap-y-2 border-t border-gray-600 pt-4">
      <h2 className="text-2xl">Top Tracks</h2>
      <p className="dark:text-gray-400">{`Here's my top tracks on Spotify updated daily.`}</p>

      {isLoading ? (
        <div className="flex animate-pulse items-center gap-x-3">
          <div className="h-6 w-4 rounded-md bg-gray-600"></div>
          <div className="h-[60px] w-[60px] rounded-md bg-gray-600"></div>
          <div className="flex flex-col gap-2">
            <div className="h-4 w-24 rounded-md bg-gray-600"></div>
            <div className="h-4 w-48 rounded-md bg-gray-600"></div>
          </div>
        </div>
      ) : (
        <ul className="flex flex-col gap-y-2">
          {data?.map((item, index) => (
            <li
              key={`${item.title} - ${item.artist} - ${index}`}
              className="flex items-center border-b-[1px] border-gray-400 py-2 dark:border-gray-600"
            >
              <div className="w-5 text-center dark:text-gray-400">{index + 1}</div>

              <div className="mx-2 h-[64px] w-[64px]">
                <Image
                  className="rounded-md"
                  unoptimized
                  alt={item?.album?.name}
                  src={item?.album?.image?.url}
                  width={60}
                  height={60}
                />
              </div>
              <div className="flex w-3/5 flex-grow flex-col md:w-full">
                <Link className="truncate font-medium md:overflow-clip" href={item?.songUrl}>
                  {item.title}
                </Link>
                <p className="truncate text-gray-500 dark:text-gray-400 md:overflow-clip">
                  {item?.artist ?? 'Spotify'}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
