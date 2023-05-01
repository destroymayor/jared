'use client';

import { Suspense } from 'react';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import { GithubOutlineIcon } from '@/components/Icons';

import Overview from './Overview';
import Calendar from './Calendar';
import { OverviewSkeleton, CalendarSkeleton } from './Skeleton';
import { ContributionsCollectionType } from './types';

export default function Contributions() {
  const { data } = useSWR<ContributionsCollectionType>('/api/github/contribution', fetcher, {
    revalidateOnFocus: false,
    suspense: true,
  });

  const contributionCalendar = data?.contributionsCollection.contributionCalendar;

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <GithubOutlineIcon className="h-6 w-6" />
        <span>Contributions</span>
      </h2>
      <p className="dark:text-zinc-400">{`My last year's contributions in Github.`}</p>

      <Suspense fallback={<OverviewSkeleton />}>
        <Overview
          weeks={contributionCalendar?.weeks}
          totalContributions={contributionCalendar?.totalContributions}
        />
      </Suspense>

      <Suspense fallback={<CalendarSkeleton />}>
        <Calendar
          colors={contributionCalendar?.colors}
          weeks={contributionCalendar?.weeks}
          months={contributionCalendar?.months}
        />
      </Suspense>
    </div>
  );
}
