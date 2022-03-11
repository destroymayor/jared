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
    <div className="relative flex h-6 w-full justify-center rounded-full bg-gray-200 dark:bg-gray-600">
      <animated.span
        className="absolute top-0 left-0 rounded-full bg-gradient-to-r from-green-300 to-blue-300 px-3 dark:from-green-400 dark:to-blue-500"
        style={style}
      >
        &ensp;
      </animated.span>
      <div className="absolute text-gray-600 dark:text-gray-100">{percent}%</div>
    </div>
  );
};

export default Progress;
