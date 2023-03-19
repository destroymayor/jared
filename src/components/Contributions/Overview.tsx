import { Fragment } from 'react';

import clsx from 'clsx';
import AnimateCounter from '@/components/AnimateCounter';

import { contributionDaysProp } from './types';

interface OverviewProps {
  loading: boolean;
  data: {
    weeks: {
      contributionDays: contributionDaysProp[];
      contributionCount: number;
    }[];
    totalContributions: number;
  };
}

export default function Overview(props: OverviewProps) {
  const { loading, data } = props;

  const totalContributions = data?.totalContributions;
  const weeks = data?.weeks ?? [];

  const totalThisWeekContribution =
    weeks?.[weeks?.length - 1]?.contributionDays
      ?.map((item) => item.contributionCount)
      ?.reduce((previousValue, currentValue) => previousValue + currentValue, 0) ?? 0;

  const totalContributionList = weeks
    .map((week) =>
      week.contributionDays.map((contributionDay) => contributionDay.contributionCount)
    )
    .flat(1);

  const bestContribution = Math.max(...totalContributionList);
  const averageContribution = totalContributions / totalContributionList.length;

  const overviews = [
    { title: 'Total', value: totalContributions },
    { title: 'This Week', value: totalThisWeekContribution },
    { title: 'Best Day', value: bestContribution },
    { title: 'Daily Average', value: averageContribution },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 py-2 md:grid-cols-4">
      {overviews.map((item) => (
        <Fragment key={item.title}>
          {loading ? (
            <div className="h-[64px] animate-pulse rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-900" />
          ) : (
            <div className="flex flex-col rounded-xl bg-zinc-100 py-2 px-4 shadow-md dark:bg-zinc-900">
              <span className={clsx('text-sm', loading ? '' : 'dark:text-zinc-400')}>
                {item.title}
              </span>
              <AnimateCounter className="text-2xl font-bold text-green-600" total={item.value} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
