import { memo } from 'react';

import Head from '@/components/Head/Head';

import Title from '@/components/Title/Title';
import NowPlaying from '@/components/Common/NowPlaying';
import TopTracks from '@/components/Music/TopTracks';
import FavoriteTracks from '@/components/Music/FavoriteTracks';

const Music = () => {
  return (
    <>
      <Head title="Music" description="Collection of electronic dance music." />
      <Title title="Music" />

      <NowPlaying />
      <TopTracks />
      <FavoriteTracks />
    </>
  );
};

export default memo(Music);
