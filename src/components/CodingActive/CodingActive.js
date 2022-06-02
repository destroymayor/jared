import useSWR from 'swr';

import Link from '@/components/Link';
import { WakaTimeIcon } from '@/components/Icons';
import Overview from '@/components/CodingActive/Overview';
import CodingActiveList from '@/components/CodingActive/CodingActiveList';

export default function CodingActive() {
  const { data } = useSWR('/api/read-stats');

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <WakaTimeIcon className="h-6 w-6" />
        <span>Coding Active</span>
      </h2>

      <p className="flex items-center gap-2 dark:text-zinc-400">
        <span>My</span>
        <Link
          href="https://wakatime.com/@Jared"
          className="underline hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          WakaTime
        </Link>
        <span>stats</span>
      </p>

      <Overview data={data} />
      <CodingActiveList data={data} />
    </div>
  );
}
