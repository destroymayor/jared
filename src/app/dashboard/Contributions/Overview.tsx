'use client';

import NumberTicker from '@/components/ui/number-ticker';
import useContributions from './useContributions';

import { Skeleton } from '@/components/ui/skeleton';

const Overview = () => {
    const { isLoading, data } = useContributions();

    if (isLoading) {
        return (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {[...Array(4).keys()].map((item) => (
                    <Skeleton
                        key={item}
                        className="h-[68px] rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800"
                    />
                ))}
            </div>
        );
    }

    if (!data) {
        return null;
    }

    const contributionCalendar = data?.contributionsCollection.contributionCalendar;
    const weeks = contributionCalendar?.weeks;
    const totalContributions = contributionCalendar?.totalContributions;

    const totalThisWeekContribution =
        weeks?.[weeks?.length - 1]?.contributionDays
            ?.map((item) => item.contributionCount)
            ?.reduce((previousValue, currentValue) => previousValue + currentValue, 0) ??
        0;

    const totalContributionList = weeks
        ?.map((week) =>
            week.contributionDays.map(
                (contributionDay) => contributionDay.contributionCount
            )
        )
        .flat(1);

    const bestContribution = Math.max(...totalContributionList);
    const averageContribution = (totalContributions || 0) / totalContributionList.length;

    const overviews = [
        {
            title: 'Total',
            value: totalContributions ?? 0,
        },
        {
            title: 'This Week',
            value: totalThisWeekContribution ?? 0,
        },
        {
            title: 'Best Day',
            value: bestContribution ?? 0,
        },
        {
            title: 'Daily Average',
            value: averageContribution ?? 0,
        },
    ];

    return (
        <div className="h-[68px] grid grid-cols-2 gap-2 md:grid-cols-4">
            {overviews.map((item) => (
                <div
                    key={item.title}
                    className="flex flex-col rounded-xl border border-zinc-200 px-4 py-2 dark:border-zinc-700"
                >
                    <span className="text-sm dark:text-zinc-400">{item.title}</span>
                    <NumberTicker
                        className="text-2xl font-bold text-green-600 dark:text-green-600"
                        value={item.value}
                    />
                </div>
            ))}
        </div>
    );
};

export default Overview;
