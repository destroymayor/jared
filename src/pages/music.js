import { memo } from 'react';

import Head from '@/components/Head/Head';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { getNowPlaying, getTopTracks } from '@/lib/spotify';

import NowPlaying from '@/components/Music/NowPlaying';
import TopTracks from '@/components/Music/TopTracks';
import FavoriteTracks from '@/components/Music/FavoriteTracks';

const Music = (props) => {
  const { getNowPlayingData, getTopTracksData } = props;

  const { data: nowPlayingData } = useSWR('/api/now-playing', fetcher, {
    fallbackData: getNowPlayingData,
  });
  const { data: topTracksData } = useSWR('/api/top-tracks', fetcher, {
    fallbackData: getTopTracksData,
  });

  const title = `Music`;
  const description = `Collection of electronic dance music.`;

  return (
    <>
      <Head title={title} description={description} />
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="py-4 text-md sm:text-lg dark:text-gray-400">{description}</p>

      <NowPlaying data={nowPlayingData} />
      <TopTracks data={topTracksData} />
      <FavoriteTracks />
    </>
  );
};

export const getStaticProps = async () => {
  const nowPlayingResponse = await getNowPlaying();
  const topTracksResponse = await getTopTracks();

  const getNowPlayingData = await nowPlayingResponse.json().then((res) => res);
  const getTopTracksData = await topTracksResponse.json().then((res) => res);

  return {
    props: {
      getNowPlayingData,
      getTopTracksData,
    },
    revalidate: 60,
  };
};

export default memo(Music);
