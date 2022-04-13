import { SWRConfig } from 'swr';

import { getReadStats } from '@/lib/wakatime';
import { getNowPlaying, getTopTracks } from '@/lib/spotify';
import { getGithubUser } from '@/lib/github';

import TopTracks from '@/components/TopTracks';
import CodingActive from '@/components/CodingActive';
import Contributions from '@/components/Contributions';

const title = 'Dashboard';
const description = `This is my personal dashboard, built with Next.js API routes deployed as serverless functions.`;

Dashboard.title = title;
Dashboard.description = description;

export default function Dashboard(props) {
  const { fallback } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <h1 className="text-3xl">{title}</h1>
      <p className="pt-2 dark:text-zinc-400">{description}</p>
      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />

      <div className="flex flex-col gap-y-6">
        <Contributions />

        <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
          <CodingActive />
        </div>

        <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
          <TopTracks />
        </div>
      </div>
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const readStats = await getReadStats();
  const nowPlaying = await getNowPlaying();
  const topTracks = await getTopTracks();
  const githubUser = await getGithubUser();

  return {
    props: {
      fallback: {
        '/api/read-stats': readStats.data,
        '/api/now-playing': nowPlaying.data,
        '/api/top-tracks': topTracks.data,
        '/api/github': githubUser.data,
      },
    },
    revalidate: 1,
  };
}
