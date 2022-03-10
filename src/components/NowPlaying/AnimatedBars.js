import { useSpring, animated } from 'react-spring';

export default function AnimatedBars() {
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
