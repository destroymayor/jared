import AnimateCounter from '@/components/AnimateCounter';

import { WeeksType } from './types';

interface OverviewProps {
  weeks: WeeksType[] | undefined;
  totalContributions: number | undefined;
}

export default function Overview(props: OverviewProps) {
  const { weeks = [], totalContributions } = props;

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
  const averageContribution = (totalContributions || 0) / totalContributionList.length;

  const overviews = [
    { title: 'Total', value: totalContributions },
    { title: 'This Week', value: totalThisWeekContribution },
    { title: 'Best Day', value: bestContribution },
    { title: 'Daily Average', value: averageContribution },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 py-2 md:grid-cols-4">
      {overviews.map((item) => (
        <div
          key={item.title}
          className="flex flex-col rounded-xl bg-zinc-100 px-4 py-2 shadow-md dark:bg-zinc-900"
        >
          <span className="text-sm dark:text-zinc-400">{item.title}</span>
          <AnimateCounter className="text-2xl font-bold text-green-600" total={item.value} />
        </div>
      ))}
    </div>
  );
}
