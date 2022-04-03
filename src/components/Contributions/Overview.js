import AnimateCounter from '@/components/Common/AnimateCounter';

export default function Overview(props) {
  const { data } = props;

  const totalContributions = data.totalContributions;
  const weeks = data?.weeks ?? [];

  const totalThisWeekContribution =
    weeks[weeks.length - 1]?.contributionDays
      ?.map((item) => item.contributionCount)
      ?.reduce((previousValue, currentValue) => previousValue + currentValue, 0) ?? 0;
  const totalContributionList = weeks
    .map((week) =>
      week.contributionDays.map((contributionDay) => contributionDay.contributionCount)
    )
    .flat(1);

  const bestContribution = Math.max(...totalContributionList) ?? 0;
  const averageContribution = totalContributions / totalContributionList.length;

  return (
    <div className="flex flex-wrap gap-4 self-start rounded-md py-2">
      <div className="flex flex-col">
        <span className="text-sm dark:text-zinc-400">Total</span>
        <span className="text-2xl font-bold text-green-600">
          <AnimateCounter total={totalContributions} />
        </span>
      </div>

      <div className="border-l border-zinc-600"></div>

      <div className="flex flex-col">
        <span className="text-sm dark:text-zinc-400">This week</span>
        <span className="text-2xl font-bold text-green-600">
          <AnimateCounter total={totalThisWeekContribution} />
        </span>
      </div>

      <div className="border-l border-zinc-600"></div>

      <div className="flex flex-col">
        <span className="text-sm dark:text-zinc-400">Best day</span>
        <span className="text-2xl font-bold text-green-600">
          <AnimateCounter total={bestContribution} />
        </span>
      </div>

      <div className="border-l border-zinc-600"></div>

      <div className="flex flex-col">
        <span className="text-sm dark:text-zinc-400">Average</span>
        <span>
          <span className="text-2xl font-bold text-green-600">
            <AnimateCounter total={averageContribution} />
          </span>
          <span className="text-sm dark:text-zinc-400">/day</span>
        </span>
      </div>
    </div>
  );
}
