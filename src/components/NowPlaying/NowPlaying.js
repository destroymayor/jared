import Image from 'next/image';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { useSpring, animated } from 'react-spring';

import Link from '@/components/Common/Link';
import { SpotifyIcon } from '@/components/Common/Icons';

function AnimatedBars() {
  const bar1Style = useSpring({
    loop: true,
    from: { scaleY: 1.0, translateY: '0rem' },
    to: [
      { scaleY: 1.0, translateY: '0rem' },
      { scaleY: 2.5, translateY: '0.3rem' },
      { scaleY: 1.0, translateY: '0rem' },
    ],
    config: { duration: 500 },
  });

  const bar2Style = useSpring({
    loop: true,
    from: { scaleY: 1.0, translateY: '0rem' },
    to: [
      { scaleY: 1.0, translateY: '0rem' },
      { scaleY: 3, translateY: '-0.083rem' },
      { scaleY: 1.0, translateY: '0rem' },
    ],
    delay: 200,
    config: { duration: 300 },
  });

  const bar3Style = useSpring({
    loop: true,
    from: { scaleY: 1.0, translateY: '0rem' },
    to: [
      { scaleY: 1.0, translateY: '0rem' },
      { scaleY: 0.5, translateY: '0.37rem' },
      { scaleY: 1.0, translateY: '0rem' },
    ],
    delay: 300,
    config: { duration: 400 },
  });

  const bar4Style = useSpring({
    loop: true,
    from: { scaleY: 1.0, translateY: '0rem' },
    to: [
      { scaleY: 1.0, translateY: '0rem' },
      { scaleY: 2.5, translateY: '0.5rem' },
      { scaleY: 1.0, translateY: '0rem' },
    ],
    delay: 200,
    config: { duration: 500 },
  });

  return (
    <div className="flex w-auto items-end overflow-hidden">
      <animated.span
        className="mr-[1px] h-2 w-[3px] bg-gray-800 opacity-75 dark:bg-gray-500"
        style={bar1Style}
      />
      <animated.span
        className="mr-[1px] h-1 w-[3px] bg-gray-800 dark:bg-gray-500"
        style={bar2Style}
      />
      <animated.span
        className="mr-[1px] h-3 w-[3px] bg-gray-800 opacity-80 dark:bg-gray-500"
        style={bar3Style}
      />
      <animated.span className="h-3 w-[3px] bg-gray-800 dark:bg-gray-500" style={bar4Style} />
    </div>
  );
}

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing', fetcher);

  const isLoading = !data;

  if (isLoading)
    return (
      <div className="flex animate-pulse items-center gap-x-3">
        <div className="h-14 w-14 rounded-md bg-gray-600"></div>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-12 rounded-md bg-gray-600"></div>
          <div className="h-4 w-32 rounded-md bg-gray-600"></div>
        </div>
      </div>
    );

  return (
    <section className="flex items-center gap-x-3">
      {data?.albumImageUrl ? (
        <div className="flex h-[60px] w-[60px] flex-none items-center justify-center">
          <Image
            className="rounded-md"
            unoptimized
            alt={data?.album}
            src={data?.albumImageUrl}
            width={60}
            height={60}
          />
        </div>
      ) : (
        <div className="h-6 w-6 flex-none">
          <SpotifyIcon className="h-6 w-6" />
        </div>
      )}

      <div className="flex w-3/5 flex-auto flex-col gap-y-1 md:w-full">
        {data?.songUrl && <AnimatedBars />}
        <div className="flex flex-col">
          {data?.songUrl ? (
            <Link className="truncate font-medium md:overflow-clip" href={data?.songUrl}>
              {data.title}
            </Link>
          ) : (
            <p className="font-medium">Not Playing</p>
          )}
          <p className="max-w-max truncate text-gray-500 dark:text-gray-400 md:overflow-clip">
            {data?.artist ?? 'Spotify'}
          </p>
        </div>
      </div>
    </section>
  );
}
