import { SpotifyIcon } from '@/components/Common/Icons';

import NowPlaying from '@/components/NowPlaying';
import TopTracksList from '@/components/TopTracks/TopTracksList';

export default function TopTracks() {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="flex items-center gap-2 text-2xl">
        <SpotifyIcon className="h-7 w-7" />
        <span>Top Tracks</span>
      </h2>
      <p className="dark:text-gray-400">{`Here's my top tracks on Spotify updated daily.`}</p>

      <NowPlaying />
      <TopTracksList />
    </div>
  );
}
