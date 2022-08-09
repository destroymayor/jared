import { useState } from 'react';

import { motion } from 'framer-motion';

import clsx from 'clsx';

type contributionDaysProp = {
  date: string;
  contributionCount: number;
  color: string | null;
};

type weeksProps = {
  contributionDays: contributionDaysProp[];
  firstDay: string;
};

type Props = {
  loading: boolean;
  data: {
    colors: any[];
    weeks: weeksProps[];
    months: any[];
  };
};

type selectContributionProps = {
  count: string | null;
  date: string | null;
};

export default function Calendar(props: Props) {
  const { loading, data } = props;

  const [selectContribution, setSelectContribution] = useState<selectContributionProps>({
    count: null,
    date: null,
  });

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month) => {
      const filterContributionDay = weeks
        .filter((week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7))
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) => previousValue + currentValue.contributionCount,
        0
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  const contributionColors = data?.colors ?? [];

  const handleSelectContribution = (data: any) => {
    const { count, date } = data;
    setSelectContribution({ count, date });
  };

  return (
    <>
      <div className="relative flex flex-col gap-[2px]">
        {loading ? (
          <div className="h-[104px] w-full animate-pulse rounded-xl bg-zinc-300 dark:bg-zinc-800"></div>
        ) : (
          <>
            <ul className="flex justify-end gap-[3px] overflow-hidden text-xs dark:text-zinc-400 md:justify-start">
              {months.map((month) => (
                <li
                  key={month.firstDay}
                  className={clsx(month.totalWeeks < 2 ? 'invisible' : '')}
                  style={{ minWidth: 12.3 * month.totalWeeks }}
                >
                  {month.name}
                </li>
              ))}
            </ul>

            <div className="flex justify-end gap-[3px] overflow-hidden">
              {weeks?.map((week) => (
                <div key={week.firstDay}>
                  {week.contributionDays.map((contribution) => {
                    const backgroundColor: any =
                      contribution.contributionCount > 0 ? contribution?.color : null;

                    const getRandomDelayAnimate =
                      Math.random() * week.contributionDays.length * 0.15;

                    return (
                      <motion.span
                        key={contribution.date}
                        initial={{ opacity: 0, translateY: -20 }}
                        animate={{
                          opacity: 1,
                          translateY: 0,
                          transition: { delay: getRandomDelayAnimate },
                        }}
                        className="my-[2px] block h-[10px] w-[10px] rounded-sm bg-zinc-300 dark:bg-zinc-800"
                        style={{ backgroundColor }}
                        onMouseEnter={() =>
                          handleSelectContribution({
                            count: contribution.contributionCount,
                            date: contribution.date,
                          })
                        }
                        onMouseLeave={() => handleSelectContribution({ count: null, date: null })}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        {loading ? (
          <div className="h-4 w-1/3 animate-pulse rounded-md bg-zinc-300 px-2 dark:bg-zinc-800" />
        ) : (
          <div className="flex items-center gap-2 text-sm">
            <span className="dark:text-zinc-400">Less</span>
            <ul className="flex gap-1">
              <motion.li className="h-[10px] w-[10px] rounded-sm bg-zinc-300 dark:bg-zinc-800" />
              {contributionColors.map((color, colorIndex) => (
                <motion.li
                  key={color}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: colorIndex * 0.3 },
                    backgroundColor: color,
                  }}
                  className="h-[10px] w-[10px] rounded-sm"
                />
              ))}
            </ul>
            <span>More</span>
          </div>
        )}

        <div
          className={clsx(
            selectContribution.date ? 'opacity-100' : 'opacity-0',
            'rounded bg-zinc-200 px-2 text-sm dark:bg-zinc-800'
          )}
        >
          {selectContribution.count} contributions on {selectContribution.date}
        </div>
      </div>
    </>
  );
}
