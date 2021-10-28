import { memo } from 'react';

import Head from '@/components/Head/Head';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import NowPlaying from '@/components/Music/NowPlaying';
import TopTracks from '@/components/Music/TopTracks';
import FavoriteTracks from '@/components/Music/FavoriteTracks';

const Music = () => {
  const { data: nowPlayingData } = useSWR('/api/now-playing', fetcher);
  const { data: topTracksData } = useSWR('/api/top-tracks', fetcher);

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

export default memo(Music);
