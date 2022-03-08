import { SWRConfig } from 'swr';

import { getReadStats } from '@/lib/wakatime';
import { getNowPlaying, getTopTracks } from '@/lib/spotify';
import { getGithubUser } from '@/lib/github';

import NowPlaying from '@/components/NowPlaying';
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
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="text-md py-4 dark:text-gray-400 sm:text-lg">{description}</p>

      <div className="mt-2 flex flex-col gap-y-10">
        <NowPlaying />
        <Contributions />
        <CodingActive />
        <TopTracks />
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
    revalidate: 60,
  };
}
