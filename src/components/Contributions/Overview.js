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
    <div className="grid grid-cols-2 gap-2 py-2 sm:grid-cols-4">
      <div className="flex flex-col rounded-xl bg-zinc-100 py-2 px-4 shadow-lg dark:bg-zinc-900">
        <span className="text-sm dark:text-zinc-400">Total</span>
        <AnimateCounter className="text-2xl font-bold text-green-600" total={totalContributions} />
      </div>

      <div className="flex flex-col rounded-xl bg-zinc-100 py-2 px-4 shadow-lg dark:bg-zinc-900">
        <span className="text-sm dark:text-zinc-400">This Week</span>

        <AnimateCounter
          className="text-2xl font-bold text-green-600"
          total={totalThisWeekContribution}
        />
      </div>

      <div className="flex flex-col rounded-xl bg-zinc-100 py-2 px-4 shadow-lg dark:bg-zinc-900">
        <span className="text-sm dark:text-zinc-400">Best Day</span>
        <AnimateCounter className="text-2xl font-bold text-green-600" total={bestContribution} />
      </div>

      <div className="flex flex-col rounded-xl bg-zinc-100 py-2 px-4 shadow-lg dark:bg-zinc-900">
        <span className="text-sm dark:text-zinc-400">Average</span>
        <span>
          <AnimateCounter
            className="text-2xl font-bold text-green-600"
            total={averageContribution}
          />
          <span className="text-sm dark:text-zinc-400">/day</span>
        </span>
      </div>
    </div>
  );
}
