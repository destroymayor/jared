import { useEffect } from 'react';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Link from '@/components/Common/Link';
import { SpotifyIcon } from '@/components/Common/Icons';

const AnimatedBars = ({ songUrl }) => {
  const [bar1Style, setBar1Animate] = useSpring(() => ({
    loop: true,
    from: { scaleY: 1.0, translateY: '0rem' },
    to: [
      { scaleY: 1.0, translateY: '0rem' },
      { scaleY: 2.5, translateY: '0.3rem' },
      { scaleY: 1.0, translateY: '0rem' },
    ],
    config: { duration: 500 },
  }));

  const [bar2Style, setBar2Animate] = useSpring(() => ({
    loop: true,
    from: { scaleY: 1.0, translateY: '0rem' },
    to: [
      { scaleY: 1.0, translateY: '0rem' },
      { scaleY: 3, translateY: '-0.083rem' },
      { scaleY: 1.0, translateY: '0rem' },
    ],
    delay: 200,
    config: { duration: 300 },
  }));

  const [bar3Style, setBar3Animate] = useSpring(() => ({
    loop: true,
    from: { scaleY: 1.0, translateY: '0rem' },
    to: [
      { scaleY: 1.0, translateY: '0rem' },
      { scaleY: 0.5, translateY: '0.37rem' },
      { scaleY: 1.0, translateY: '0rem' },
    ],
    delay: 300,
    config: { duration: 400 },
  }));

  const [bar4Style, setBar4Animate] = useSpring(() => ({
    loop: true,
    from: { scaleY: 1.0, translateY: '0rem' },
    to: [
      { scaleY: 1.0, translateY: '0rem' },
      { scaleY: 2.5, translateY: '0.5rem' },
      { scaleY: 1.0, translateY: '0rem' },
    ],
    delay: 200,
    config: { duration: 500 },
  }));

  useEffect(() => {
    if (songUrl) {
      setBar1Animate.start();
      setBar2Animate.start();
      setBar3Animate.start();
      setBar4Animate.start();
    }

    if (!songUrl) {
      setBar1Animate.stop();
      setBar2Animate.stop();
      setBar3Animate.stop();
      setBar4Animate.stop();
    }
  }, [songUrl]);

  return (
    <div className="flex items-end w-auto overflow-hidden">
      <animated.span
        className="w-[3px] h-2 mr-[1px] bg-gray-800 dark:bg-gray-500 opacity-75"
        style={bar1Style}
      />
      <animated.span
        className="w-[3px] h-1 mr-[1px] bg-gray-800 dark:bg-gray-500"
        style={bar2Style}
      />
      <animated.span
        className="w-[3px] h-3 mr-[1px] bg-gray-800 dark:bg-gray-500 opacity-80"
        style={bar3Style}
      />
      <animated.span className="w-[3px] h-3 bg-gray-800 dark:bg-gray-500" style={bar4Style} />
    </div>
  );
};

const NowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher);

  const isLoading = !data;

  return (
    <div className="flex items-center gap-x-3">
      <div className="flex-none flex items-center justify-center w-[60px] h-[60px]">
        {data?.albumImageUrl ? (
          <Image
            className="rounded-md"
            unoptimized
            alt={data?.album}
            src={data?.albumImageUrl}
            width={60}
            height={60}
          />
        ) : (
          <SpotifyIcon className="w-8 h-8" />
        )}
      </div>
      <div className="flex flex-col flex-auto gap-y-1">
        {data?.songUrl && <AnimatedBars songUrl={data?.songUrl} />}
        <div className="flex flex-wrap">
          {data?.songUrl ? (
            <Link className="font-medium" href={data?.songUrl}>
              {data.title}
            </Link>
          ) : (
            <p className="font-medium">Not Playing</p>
          )}

          <span className="mx-2 ">{' – '}</span>
          <p className="text-gray-500 dark:text-gray-400 max-w-max">{data?.artist ?? 'Spotify'}</p>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
