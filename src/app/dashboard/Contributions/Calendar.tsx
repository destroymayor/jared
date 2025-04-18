'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Skeleton } from '@/components/ui/skeleton';

import useContributions from './useContributions';

type SelectContributionType = {
    count: number | null;
    date: string | null;
};

const Calendar = () => {
    const { data, isLoading } = useContributions();

    const [selectContribution, setSelectContribution] = useState<SelectContributionType>({
        count: null,
        date: null,
    })

    if (isLoading) {
        return (
            <>
                <Skeleton className="h-[104px] rounded-md bg-zinc-300 dark:bg-zinc-800"></Skeleton>
                <Skeleton className="h-5 w-1/3 rounded-md bg-zinc-300 p-2 dark:bg-zinc-800" />
            </>
        );
    }

    const contributionCalendar = data?.contributionsCollection.contributionCalendar;
    const colors = contributionCalendar?.colors;
    const weeks = contributionCalendar?.weeks;
    const months = contributionCalendar?.months;

    const handleSelectContribution = (data: SelectContributionType) => {
        const { count, date } = data;
        setSelectContribution({ count, date });
    };

    const monthsData = months?.map((month) => {
        const filterContributionDay = weeks
            ?.filter((week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7))
            .map((item) => item.contributionDays)
            .flat(1);
        const getContributionsByMonth = filterContributionDay?.reduce(
            (previousValue, currentValue) =>
                previousValue + currentValue.contributionCount,
            0
        );

        return {
            ...month,
            contributionsCount: getContributionsByMonth,
        };
    });

    return (
        <>
            <div className="relative flex flex-col gap-[2px]">
                <ul className="flex justify-end gap-[3px] overflow-hidden text-xs dark:text-zinc-400 md:justify-start">
                    {monthsData?.map((month) => (
                        <li
                            key={month.firstDay}
                            className={cn(month.totalWeeks < 2 ? 'invisible' : '')}
                            style={{ minWidth: 12.35 * month.totalWeeks }}
                        >
                            {month.name}
                        </li>
                    ))}
                </ul>

                <div className="flex justify-start gap-[3px] overflow-hidden">
                    {weeks?.map((week) => (
                        <div key={week.firstDay}>
                            {week.contributionDays.map((contribution) => {
                                const backgroundColor =
                                    contribution.contributionCount > 0
                                        ? (contribution?.color as string)
                                        : '';

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
                                        style={{ backgroundColor }}
                                        className="my-[2px] block h-[10px] w-[10px] rounded-xs bg-zinc-300 dark:bg-zinc-800"
                                        onMouseEnter={() =>
                                            handleSelectContribution({
                                                count: contribution.contributionCount,
                                                date: contribution.date,
                                            })
                                        }
                                        onMouseLeave={() =>
                                            handleSelectContribution({
                                                count: null,
                                                date: null,
                                            })
                                        }
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-sm">
                    <span className="dark:text-zinc-400">Less</span>
                    <ul className="flex gap-1">
                        <motion.li className="h-[10px] w-[10px] rounded-xs bg-zinc-300 dark:bg-zinc-800" />
                        {colors?.map((color, colorIndex) => (
                            <motion.li
                                key={color}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { delay: colorIndex * 0.3 },
                                    backgroundColor: color,
                                }}
                                className="h-[10px] w-[10px] rounded-xs"
                            />
                        ))}
                    </ul>
                    <span>More</span>
                </div>

                <div
                    className={cn(
                        selectContribution.date ? 'opacity-100' : 'opacity-0',
                        'rounded-sm bg-zinc-200 px-2 text-sm dark:bg-zinc-800'
                    )}
                >
                    {selectContribution.count} contributions on {selectContribution.date}
                </div>
            </div>
        </>
    );
};

export default Calendar;
