import clsx from 'clsx';
import { motion } from 'framer-motion';

const Progress = (props) => {
  const { data, className } = props;

  const name = data.name;
  const percent = data.percent ?? 0;

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="w-24 text-sm">{name}</div>
      <div className="relative flex h-3 flex-1 justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
        <motion.span
          initial="initial"
          animate="animate"
          variants={{
            initial: { width: 0 },
            animate: {
              width: `${percent}%`,
              transition: { delay: 0.8 },
            },
          }}
          className={clsx(className, 'absolute left-0 top-0 h-3 rounded-full px-3')}
        >
          &ensp;
        </motion.span>
      </div>
      <div className="w-8 text-right text-gray-600 dark:text-gray-100">{Math.floor(percent)}%</div>
    </div>
  );
};

export default Progress;
