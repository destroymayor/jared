import { useSpring, animated } from 'react-spring';

const Progress = (props) => {
  const { percent = 0 } = props;

  const style = useSpring({
    from: { width: `0` },
    to: { width: `${percent}%` },
    delay: 300,
    config: { duration: 800 },
  });

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="relative flex h-4 flex-1 justify-center rounded-full bg-gray-200 dark:bg-gray-600">
        <animated.span
          className="absolute left-0 top-0 h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-3"
          style={style}
        >
          &ensp;
        </animated.span>
      </div>
      <div className="w-10 text-right text-gray-600 dark:text-gray-100">{Math.floor(percent)}%</div>
    </div>
  );
};

export default Progress;
