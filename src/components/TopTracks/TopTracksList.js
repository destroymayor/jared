import Image from 'next/image';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Link from '@/components/Common/Link';

export default function TopTracksList() {
  const { data } = useSWR('/api/top-tracks', fetcher);

  return (
    <ul className="flex flex-col gap-y-2">
      {data?.map((item, index) => (
        <div
          key={`${item.title} - ${item.artist} - ${index}`}
          className="flex items-center border-b-[1px] border-zinc-400 py-2 dark:border-zinc-700"
        >
          <div className="w-5 text-center dark:text-zinc-400">{index + 1}</div>

          <div className="mx-2 min-h-[60px] min-w-[60px]">
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
            <p className="truncate text-sm text-zinc-500 dark:text-zinc-400 md:overflow-clip">
              {item?.artist ?? 'Spotify'}
            </p>
          </div>
        </div>
      ))}
    </ul>
  );
}
