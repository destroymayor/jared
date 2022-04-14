import Image from 'next/image';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Link from '@/components/Common/Link';
import clsx from 'clsx';

export default function TopTracksList() {
  const { data } = useSWR('/api/top-tracks', fetcher);

  return (
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
  );
}
