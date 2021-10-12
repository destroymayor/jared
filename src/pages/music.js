import { memo } from 'react';

import Head from '@/components/Head/Head';

import NowPlaying from '@/components/Music/NowPlaying';
import TopTracks from '@/components/Music/TopTracks';
import FavoriteTracks from '@/components/Music/FavoriteTracks';

const Music = () => {
  const title = `Projects`;
  const description = `Collection of electronic dance music.`;

  return (
    <>
      <Head title={title} description={description} />
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="py-4 text-lg sm:text-xl dark:text-gray-400">{description}</p>

      <NowPlaying />
      <TopTracks />
      <FavoriteTracks />
    </>
  );
};

export default memo(Music);
