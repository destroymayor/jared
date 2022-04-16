import { motion } from 'framer-motion';

import clsx from 'clsx';

export default function BarChart(props) {
  const { data } = props;

  const getMaxContribution = Math.max(...data?.map((month) => month.contributionsCount));
  const getBarChartMaxCount = parseInt(
    Math.ceil(getMaxContribution / 100) +
      getMaxContribution.toString().slice(1).replace(/[0-9]/g, '0'),
    10
  );

  return (
    <ul className="flex justify-end gap-[3px] overflow-hidden pb-1 dark:text-zinc-400 md:justify-start">
      {data.map((item) => (
        <li
          key={item.firstDay}
          className={clsx(`${item.totalWeeks < 2 ? 'invisible' : ''}`)}
          style={{ minWidth: 12.3 * item.totalWeeks }}
        >
          <span className="flex h-[100px] max-h-[100px] w-2 items-end rounded-md bg-zinc-800">
            <motion.span
              initial={{ height: 0 }}
              animate={{
                height: Math.floor((item.contributionsCount / getBarChartMaxCount) * 100),
                transition: { delay: 0.8 },
              }}
              className="flex w-2 items-end rounded-md bg-green-600 text-white"
            />
          </span>
          <span className="text-xs">{item.contributionsCount}</span>
        </li>
      ))}
    </ul>
  );
}
