import clsx from 'clsx';
import { motion } from 'framer-motion';

type Props = {
  data: {
    name: string;
    percent: number;
  };
  className?: string;
};

export default function Progress(props: Props) {
  const { data, className } = props;

  const name = data.name;
  const percent = data.percent ?? 0;

  const animateVariants = {
    inactive: {
      width: 0,
    },
    active: {
      width: `${percent}%`,
      transition: { delay: 0.3 },
    },
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="w-24 text-sm">{name}</div>
      <div className="w-full flex-1 p-2">
        <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800">
          <motion.div
            className={clsx(className, 'h-2 rounded-full shadow')}
            initial="inactive"
            viewport={{ once: true }}
            whileInView="active"
            variants={animateVariants}
          />
        </div>
      </div>
      <div className="w-8 text-right text-zinc-600 dark:text-zinc-100">{Math.floor(percent)}%</div>
    </div>
  );
}
