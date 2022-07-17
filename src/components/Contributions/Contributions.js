import useSWR from 'swr';

import { GithubIcon } from '@/components/Icons';
import Overview from '@/components/Contributions/Overview';
import Calendar from '@/components/Contributions/Calendar';

export default function Contributions() {
  const { data } = useSWR('/api/github', { revalidateOnFocus: false });

  const contributionCalendar = data?.contributionsCollection?.contributionCalendar;
  const isLoading = !data?.contributionsCollection;

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <GithubIcon className="h-6 w-6" />
        <span>Contributions</span>
      </h2>
      <p className="dark:text-zinc-400">{`My last year's contributions in Github.`}</p>

      <Overview loading={isLoading} data={contributionCalendar} />
      <Calendar loading={isLoading} data={contributionCalendar} />
    </div>
  );
}
