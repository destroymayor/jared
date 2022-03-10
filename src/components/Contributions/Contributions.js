import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Overview from '@/components/Contributions/Overview';
import Calendar from '@/components/Contributions/Calendar';

export default function Contributions() {
  const { data } = useSWR('/api/github', fetcher);

  const contributionCalendar = data?.contributionsCollection?.contributionCalendar;

  return (
    <section className="flex flex-col gap-y-2 border-t border-gray-600 pt-4">
      <h2 className="text-2xl">Contributions</h2>
      <p className="dark:text-gray-400">My contributions in Github. </p>

      <Overview data={contributionCalendar} />
      <Calendar data={contributionCalendar} />
    </section>
  );
}
