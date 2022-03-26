import NowPlaying from '@/components/NowPlaying';
import TopTracksList from '@/components/TopTracks/TopTracksList';

export default function TopTracks() {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-2xl">Top Tracks</h2>
      <p className="dark:text-gray-400">{`Here's my top tracks on Spotify updated daily.`}</p>

      <NowPlaying />
      <TopTracksList />
    </div>
  );
}
