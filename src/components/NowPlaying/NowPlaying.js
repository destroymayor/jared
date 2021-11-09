import Image from 'next/image';

import { useSpring, animated } from 'react-spring';

import Link from '@/components/Common/Link';
import { SpotifyIcon } from '@/components/Common/Icons';

const AnimatedBars = () => {
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

const NowPlaying = (props) => {
  const { data = [] } = props;

  const isLoading = !data;

  if (isLoading)
    return (
      <div className="flex items-center animate-pulse gap-x-3">
        <div className="bg-gray-600 rounded-md w-14 h-14"></div>
        <div className="flex flex-col gap-2">
          <div className="w-12 h-4 bg-gray-600 rounded-md"></div>
          <div className="w-32 h-4 bg-gray-600 rounded-md"></div>
        </div>
      </div>
    );

  return (
    <section className="flex items-center gap-x-3">
      {data?.albumImageUrl ? (
        <div className="flex-none flex items-center justify-center w-[60px] h-[60px]">
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
        <div className="flex-none w-6 h-6">
          <SpotifyIcon className="w-6 h-6" />
        </div>
      )}

      <div className="flex flex-col flex-auto w-3/5 gap-y-1 md:w-full">
        {data?.songUrl && <AnimatedBars />}
        <div className="flex flex-col">
          {data?.songUrl ? (
            <Link className="font-medium truncate md:overflow-clip" href={data?.songUrl}>
              {data.title}
            </Link>
          ) : (
            <p className="font-medium">Not Playing</p>
          )}
          <p className="text-gray-500 truncate md:overflow-clip dark:text-gray-400 max-w-max">
            {data?.artist ?? 'Spotify'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NowPlaying;
