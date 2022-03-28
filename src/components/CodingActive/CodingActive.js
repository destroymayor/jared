import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import { WakaTimeIcon } from '@/components/Common/Icons';
import Overview from '@/components/CodingActive/Overview';
import CodingActiveList from '@/components/CodingActive/CodingActiveList';

const CodingActive = () => {
  const { data } = useSWR('/api/read-stats', fetcher);

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <WakaTimeIcon className="h-7 w-7" />
        <span>Coding Active</span>
      </h2>
      <p className="dark:text-zinc-400">My weekly WakaTime stats</p>

      <Overview data={data} />
      <CodingActiveList data={data} />
    </div>
  );
};

export default CodingActive;
