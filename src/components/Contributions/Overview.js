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
  const averageContribution = (totalContributions / totalContributionList.length).toFixed(2);

  return (
    <div className="flex flex-wrap gap-6 self-start rounded-md py-2 sm:gap-10">
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-green-600">{totalContributions}</span>
        <span className="text-xs dark:text-zinc-400">Total</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-green-600">{totalThisWeekContribution}</span>
        <span className="text-xs dark:text-zinc-400">This week</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-green-600">{bestContribution}</span>
        <span className="text-xs dark:text-zinc-400">Best day</span>
      </div>
      <div className="flex flex-col">
        <span>
          <span className="text-2xl font-bold text-green-600">{averageContribution}</span>
          <span className="text-sm dark:text-zinc-400">/day</span>
        </span>
        <span className="text-xs dark:text-zinc-400">Average</span>
      </div>
    </div>
  );
}
