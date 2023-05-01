import Contributions from '@/components/Contributions';
import UnsplashStatistics from '@/components/UnsplashStatistics';
import TopTracks from '@/components/TopTracks';

export default function Page() {
  return (
    <div className="flex flex-col gap-y-10">
      <Contributions />

      <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
        <UnsplashStatistics />
      </div>

      <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
        <TopTracks />
      </div>
    </div>
  );
}
