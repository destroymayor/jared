import Image from 'next/image';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import clsx from 'clsx';
import Link from '@/components/Link';
import { SpotifySolidIcon } from '@/components/Icons';

export default function TopTracks() {
  const { data } = useSWR('/api/top-tracks', fetcher);

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <SpotifySolidIcon className="h-6 w-6" />
        <span>Top Tracks</span>
      </h2>
      <p className="dark:text-zinc-400">{`Here's my top tracks on Spotify updated daily.`}</p>

      <ul className="flex flex-col gap-y-2 py-2">
        {data?.map((item, index) => (
          <Link key={`${item.title} - ${item.artist} - ${index}`} href={item?.songUrl}>
            <div
              className={clsx(
                'flex items-center p-2',
                'rounded-2xl hover:bg-zinc-200 dark:hover:bg-zinc-900'
              )}
            >
              <span className="w-5 text-center dark:text-zinc-400">{index + 1}</span>

              <div className="mx-2 grid min-h-[60px] min-w-[60px] items-center">
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
                <div className="truncate font-medium md:overflow-clip">{item.title}</div>
                <p className="truncate text-sm text-zinc-500 dark:text-zinc-400 md:overflow-clip">
                  {item?.artist ?? 'Spotify'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
