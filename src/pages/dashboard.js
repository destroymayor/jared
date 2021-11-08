import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

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
  const { readStatsData, nowPlayingData, topTracksData } = props;

  const { data: getWakaTimeData } = useSWR('/api/wakatime', fetcher, {
    fallbackData: readStatsData,
  });
  const { data: getNowPlayingData } = useSWR('/api/now-playing', fetcher, {
    fallbackData: nowPlayingData,
  });
  const { data: getTopTracksData } = useSWR('/api/top-tracks', fetcher, {
    fallbackData: topTracksData,
  });

  return (
    <>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="py-4 text-md sm:text-lg dark:text-gray-400">{description}</p>

      <NowPlaying data={getNowPlayingData} />
      <CodingActive data={getWakaTimeData} />
      <TopTracks data={getTopTracksData} />
    </>
  );
}

export async function getStaticProps() {
  const readStats = await getReadStats();
  const nowPlaying = await getNowPlaying();
  const topTracks = await getTopTracks();

  return {
    props: {
      readStatsData: readStats.data,
      nowPlayingData: nowPlaying.data,
      topTracksData: topTracks.data,
    },
    revalidate: 1,
  };
}
