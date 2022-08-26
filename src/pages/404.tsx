import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import Container from '@/components/Container';

const Custom404: NextPageWithLayout = () => {
  return (
    <div className="flex h-[600px] flex-col items-center justify-center">
      <h1 className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-500 bg-clip-text text-7xl font-extrabold text-transparent dark:from-sky-700 dark:via-sky-600 dark:to-sky-500">
        404
      </h1>
      <p className="pt-10 text-lg">This page cannot be found.</p>
    </div>
  );
};

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <Container title="Page not found">{page}</Container>;
};

export default Custom404;
