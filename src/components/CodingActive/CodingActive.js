import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Overview from '@/components/CodingActive/Overview';
import CodingActiveList from '@/components/CodingActive/CodingActiveList';

const CodingActive = () => {
  const { data } = useSWR('/api/read-stats', fetcher);

  return (
    <section className="flex flex-col gap-y-2 border-t border-gray-500 pt-4">
      <h2 className="text-2xl">Coding Active</h2>
      <p className="dark:text-gray-400">My weekly WakaTime stats</p>

      <Overview data={data} />
      <CodingActiveList data={data} />
    </section>
  );
};

export default CodingActive;
