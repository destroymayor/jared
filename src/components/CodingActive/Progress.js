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
    <div className="relative flex justify-center w-full h-6 col-span-4 sm:col-span-3 ">
      <animated.div
        className="absolute left-0 px-2 rounded-lg bg-gradient-to-r from-green-300 dark:from-green-400 to-blue-300 dark:to-blue-500"
        style={style}
      >
        &ensp;
      </animated.div>
      <div className="absolute text-gray-600 dark:text-gray-100">{percent}%</div>
    </div>
  );
};

export default Progress;
