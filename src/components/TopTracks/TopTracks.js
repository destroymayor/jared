import Image from 'next/image';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Link from '@/components/Common/Link';
import FadeInSection from '@/components/Common/FadeInSection';

export default function TopTracks() {
  const { data } = useSWR('/api/top-tracks', fetcher);

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-2xl">Top Tracks</h2>
      <p className="dark:text-gray-400">{`Here's my top tracks on Spotify updated daily.`}</p>

      <ul className="flex flex-col gap-y-2">
        {data?.map((item, index) => (
          <FadeInSection
            key={`${item.title} - ${item.artist} - ${index}`}
            className="flex items-center border-b-[1px] border-zinc-400 py-2 dark:border-zinc-700"
          >
            <div className="w-5 text-center dark:text-zinc-400">{index + 1}</div>

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
              <p className="truncate text-zinc-500 dark:text-zinc-400 md:overflow-clip">
                {item?.artist ?? 'Spotify'}
              </p>
            </div>
          </FadeInSection>
        ))}
      </ul>
    </div>
  );
}
