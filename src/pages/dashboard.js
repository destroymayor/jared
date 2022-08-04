import { SWRConfig } from 'swr';

import { getGithubUserContribution } from '@/lib/github';
import { getWakaTimeCurrentStats } from '@/lib/wakatime';
import { getTopTracks } from '@/lib/spotify';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import TopTracks from '@/components/TopTracks';
import WakaTimeStats from '@/components/WakaTimeStats';
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
          <WakaTimeStats />
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
  const githubUserContribution = await getGithubUserContribution();
  const wakaTimeCurrentStats = await getWakaTimeCurrentStats();
  const topTracks = await getTopTracks();

  return {
    props: {
      fallback: {
        '/api/github/contribution': githubUserContribution.data,
        '/api/wakatime/current-stats': wakaTimeCurrentStats.data,
        '/api/spotify/top-tracks': topTracks.data,
      },
    },
  };
}
