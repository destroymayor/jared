import NowPlaying from '@/components/Music/NowPlaying';
import TopTracks from '@/components/Music/TopTracks';
import CodingActive from '@/components/CodingActive/CodingActive';

const title = 'Dashboard';
const description = `This is my personal dashboard, built with Next.js API routes deployed as serverless functions.`;

Dashboard.title = title;
Dashboard.description = description;

export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="py-4 text-md sm:text-lg dark:text-gray-400">{description}</p>

      <NowPlaying />
      <CodingActive />
      <TopTracks />
    </>
  );
}
