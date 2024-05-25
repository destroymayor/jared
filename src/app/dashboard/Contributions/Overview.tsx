"use client";

import AnimateCounter from "@/components/AnimateCounter";
import useContributions from "./useContributions";
import { OverviewSkeleton } from "./Skeleton";

export default function Overview() {
  const { data, isLoading } = useContributions();

  if (isLoading) {
    return <OverviewSkeleton />;
  }

  if (!data) {
    return null;
  }

  const contributionCalendar =
    data?.contributionsCollection.contributionCalendar;
  const weeks = contributionCalendar?.weeks;
  const totalContributions = contributionCalendar?.totalContributions;

  const totalThisWeekContribution =
    weeks?.[weeks?.length - 1]?.contributionDays
      ?.map((item) => item.contributionCount)
      ?.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0,
      ) ?? 0;

  const totalContributionList = weeks
    ?.map((week) =>
      week.contributionDays.map(
        (contributionDay) => contributionDay.contributionCount,
      ),
    )
    .flat(1);

  const bestContribution = Math.max(...totalContributionList);
  const averageContribution =
    (totalContributions || 0) / totalContributionList.length;

  const overviews = [
    {
      title: "Total",
      value: Number.isInteger(totalContributions) ? totalContributions : 0,
    },
    {
      title: "This Week",
      value: Number.isInteger(totalThisWeekContribution)
        ? totalThisWeekContribution
        : 0,
    },
    {
      title: "Best Day",
      value: Number.isInteger(bestContribution) ? bestContribution : 0,
    },
    {
      title: "Daily Average",
      value: Number.isInteger(averageContribution) ? averageContribution : 0,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 py-2 md:grid-cols-4">
      {overviews.map((item) => (
        <div
          key={item.title}
          className="flex flex-col rounded-xl bg-zinc-100 px-4 py-2 shadow-md dark:bg-zinc-900"
        >
          <span className="text-sm dark:text-zinc-400">{item.title}</span>
          <AnimateCounter
            className="text-2xl font-bold text-green-600"
            total={item.value}
          />
        </div>
      ))}
    </div>
  );
}
