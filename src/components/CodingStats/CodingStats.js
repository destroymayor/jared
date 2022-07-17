import Image from 'next/future/image';

import useSWR from 'swr';

import Link from '@/components/Link';
import { WakaTimeIcon } from '@/components/Icons';
import Overview from '@/components/CodingStats/Overview';
import ActiveList from '@/components/CodingStats/ActiveList';

export default function CodingStats() {
  const { data } = useSWR('/api/read-stats', { revalidateOnFocus: false });

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <WakaTimeIcon className="h-6 w-6" />
        <span>Coding Stats</span>
      </h2>

      <div className="flex flex-wrap items-center gap-2">
        <p className="flex items-center gap-2 dark:text-zinc-400">
          <span>My coding stats on</span>
          <Link
            href="https://wakatime.com/@Jared"
            className="underline hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            WakaTime
          </Link>
        </p>
        <Link href="https://wakatime.com/@74937d38-0477-4acf-a1fe-3ad38f267774">
          <Image
            src="https://wakatime.com/badge/user/74937d38-0477-4acf-a1fe-3ad38f267774.svg"
            alt="Total time coded since Jun 17 2017"
            width={190}
            height={20}
          />
        </Link>
      </div>

      <Overview data={data} />
      <ActiveList data={data} />
    </div>
  );
}
