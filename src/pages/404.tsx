import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import Container from '@/components/Container';
import { FrownIcon } from '@/components/Icons';

const Custom404: NextPageWithLayout = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-10">
      <FrownIcon className="h-20 w-20" />
      <p className="text-lg">This page cannot be found.</p>
    </div>
  );
};

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <Container title="Page not found">{page}</Container>;
};

export default Custom404;
