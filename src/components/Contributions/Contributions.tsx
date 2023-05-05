'use client';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import { ContributionsCollectionType } from '@/lib/github';
import { GithubOutlineIcon } from '@/components/Icons';

import Overview from './Overview';
import Calendar from './Calendar';

export default function Contributions() {
  const { data, isLoading } = useSWR<ContributionsCollectionType>(
    '/api/github/contribution',
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const contributionCalendar = data?.contributionsCollection.contributionCalendar;

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <GithubOutlineIcon className="h-6 w-6" />
        <span>Contributions</span>
      </h2>
      <p className="dark:text-zinc-400">{`My last year's contributions in Github.`}</p>

      <Overview
        loading={isLoading}
        weeks={contributionCalendar?.weeks}
        totalContributions={contributionCalendar?.totalContributions}
      />

      <Calendar
        loading={isLoading}
        colors={contributionCalendar?.colors}
        weeks={contributionCalendar?.weeks}
        months={contributionCalendar?.months}
      />
    </div>
  );
}
