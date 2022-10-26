import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

import { WakaTimeIcon } from '@/components/Icons';
import Overview from '@/components/WakaTimeStats/Overview';
import ActiveList from '@/components/WakaTimeStats/ActiveList';

export default function WakaTimeStats() {
  const { data } = useSWR('/api/wakatime/current-stats', { revalidateOnFocus: false });

  const isLoading = !data;

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <WakaTimeIcon className="h-6 w-6" />
        <span>Coding Stats</span>
      </h2>

      <div className="flex flex-wrap items-center gap-2">
        <p className="flex items-center gap-2 dark:text-zinc-400">My last 7 days of coding stats</p>
        <Link
          href="https://wakatime.com/@74937d38-0477-4acf-a1fe-3ad38f267774"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://wakatime.com/badge/user/74937d38-0477-4acf-a1fe-3ad38f267774.svg"
            alt="Total time coded since Jun 17 2017"
            width={183}
            height={20}
          />
        </Link>
      </div>

      <Overview loading={isLoading} data={data} />
      <ActiveList loading={isLoading} data={data} />

      <span className="self-end pt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Powered by{' '}
        <Link
          href="https://wakatime.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          WakaTime
        </Link>
      </span>
    </div>
  );
}
