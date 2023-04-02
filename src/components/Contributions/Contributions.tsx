import useSWR from 'swr';

import { GithubOutlineIcon } from '@/components/Icons';
import Overview from '@/components/Contributions/Overview';
import Calendar from '@/components/Contributions/Calendar';

export default function Contributions() {
  const { data: contributionData, isLoading } = useSWR('/api/github/contribution', {
    revalidateOnFocus: false,
  });

  const contributionCalendar = contributionData?.contributionsCollection?.contributionCalendar;

  if (!isLoading && !contributionCalendar) return null;

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <GithubOutlineIcon className="h-6 w-6" />
        <span>Contributions</span>
      </h2>
      <p className="dark:text-zinc-400">{`My last year's contributions in Github.`}</p>

      <Overview loading={isLoading} data={contributionCalendar} />
      <Calendar loading={isLoading} data={contributionCalendar} />
    </div>
  );
}
