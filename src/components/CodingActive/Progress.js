import { useSpring, animated } from 'react-spring';

const Progress = (props) => {
  const { data } = props;

  const name = data.name;
  const percent = data.percent ?? 0;

  const style = useSpring({
    from: { width: `0` },
    to: { width: `${percent}%` },
    delay: 300,
    config: { duration: 800 },
  });

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="w-24 text-sm">{name}</div>
      <div className="relative flex h-3 flex-1 justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
        <animated.span
          className="absolute left-0 top-0 h-3 rounded-full bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 px-3 dark:from-sky-400 dark:via-sky-600 dark:to-sky-700"
          style={style}
        >
          &ensp;
        </animated.span>
      </div>
      <div className="w-8 text-right text-gray-600 dark:text-gray-100">{Math.floor(percent)}%</div>
    </div>
  );
};

export default Progress;
