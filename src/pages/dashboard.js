import { SWRConfig } from 'swr';

import { getReadStats } from '@/lib/wakatime';
import { getNowPlaying, getTopTracks } from '@/lib/spotify';
import { getGithubUser } from '@/lib/github';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import TopTracks from '@/components/TopTracks';
import CodingStats from '@/components/CodingStats';
import Contributions from '@/components/Contributions';

const title = 'Dashboard';
const description = `This is my personal dashboard, built with Next.js API routes deployed as serverless functions.`;

export default function Dashboard(props) {
  const { fallback } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <div className="flex flex-col gap-y-10">
        <Contributions />

        <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
          <CodingStats />
        </div>

        <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
          <TopTracks />
        </div>
      </div>
    </SWRConfig>
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

export async function getStaticProps() {
  const readStats = await getReadStats();
  const nowPlaying = await getNowPlaying();
  const topTracks = await getTopTracks();
  const githubUser = await getGithubUser();

  return {
    props: {
      fallback: {
        '/api/read-stats': readStats.data,
        '/api/now-playing': nowPlaying.data,
        '/api/top-tracks': topTracks.data,
        '/api/github': githubUser.data,
      },
    },
    revalidate: 1,
  };
}
