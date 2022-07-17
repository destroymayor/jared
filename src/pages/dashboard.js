import Container from '@/components/Container';
import Hero from '@/components/Hero';
import TopTracks from '@/components/TopTracks';
import CodingStats from '@/components/CodingStats';
import Contributions from '@/components/Contributions';

const title = 'Dashboard';
const description = `This is my personal dashboard, built with Next.js API routes deployed as serverless functions.`;

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-y-10">
      <Contributions />

      <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
        <CodingStats />
      </div>

      <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
        <TopTracks />
      </div>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />

      {page}
    </Container>
  );
};
