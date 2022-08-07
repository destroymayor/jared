import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import TopTracks from '@/components/TopTracks';
import WakaTimeStats from '@/components/WakaTimeStats';
import Contributions from '@/components/Contributions';

const title = 'Dashboard';
const description = `This is my personal dashboard, built with Next.js API routes deployed as serverless functions.`;

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <Contributions />

      <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
        <WakaTimeStats />
      </div>

      <div className="border-t border-zinc-300 pt-6 dark:border-zinc-800">
        <TopTracks />
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />

      {page}
    </Container>
  );
};

export default Page;
