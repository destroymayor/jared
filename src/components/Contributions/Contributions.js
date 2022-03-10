import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Overview from '@/components/Contributions/Overview';
import Calendar from '@/components/Contributions/Calendar';

export default function Contributions() {
  const { data } = useSWR('/api/github', fetcher);

  const contributionCalendar = data?.contributionsCollection?.contributionCalendar;

  return (
    <section className="flex flex-col gap-y-2 border-t border-gray-600 pt-4">
      <h3 className="text-2xl">Github Contributions</h3>

      <Overview data={contributionCalendar} />
      <Calendar data={contributionCalendar} />
    </section>
  );
}
