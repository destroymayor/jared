import { SWRConfig } from 'swr';

import { getReadStats } from '@/lib/wakatime';
import { getNowPlaying, getTopTracks } from '@/lib/spotify';

import NowPlaying from '@/components/NowPlaying/NowPlaying';
import TopTracks from '@/components/TopTracks/TopTracks';
import CodingActive from '@/components/CodingActive/CodingActive';

const title = 'Dashboard';
const description = `This is my personal dashboard, built with Next.js API routes deployed as serverless functions.`;

Dashboard.title = title;
Dashboard.description = description;

export default function Dashboard(props) {
  const { fallback } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="py-4 text-md sm:text-lg dark:text-gray-400">{description}</p>

      <div className="flex flex-col mt-2 gap-y-10">
        <NowPlaying />
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

  return {
    props: {
      fallback: {
        '/api/read-stats': readStats.data,
        '/api/now-playing': nowPlaying.data,
        '/api/top-tracks': topTracks.data,
      },
    },
    revalidate: 60,
  };
}
