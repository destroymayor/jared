import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Giscus from '@/components/Giscus';

const title = `Guestbook`;
const description = `Login your GitHub account to leave a message.`;

const Page: NextPageWithLayout = () => (
  <div className="min-h-[600px]">
    <Giscus
      repo="destroymayor/guestbook"
      repoId="R_kgDOHwPSeA"
      category="General"
      categoryId="DIC_kwDOHwPSeM4CQkUo"
      mapping="title"
    />
  </div>
);

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />
      {page}
    </Container>
  );
};

export default Page;
