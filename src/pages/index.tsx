import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import Container from '@/components/Container';
import ExternalLink from '@/components/ExternalLink';

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-3 sm:pt-10">
      <h1 className="text-4xl font-extrabold">Jared</h1>
      <h2 className="text-zinc-700 dark:text-zinc-400">Front-End Developer</h2>

      <hr className="w-28 border border-zinc-300 dark:border-zinc-700" />

      <p className="pt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        I&#39;m <b>Jared Chen</b>, a Front-end Developer working with <b>React</b> and{' '}
        <b>Next.js</b> who enjoys building great quality and great user experience products.
      </p>

      <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        Currently working at{' '}
        <ExternalLink
          href="https://www.pinkoi.com"
          className="border-b border-zinc-300 pb-[2px] font-bold text-zinc-800 transition duration-300 ease-in-out hover:border-zinc-500 dark:border-zinc-500 dark:text-zinc-50 dark:hover:border-zinc-300"
        >
          Pinkoi
        </ExternalLink>
        . Previously at{' '}
        <ExternalLink
          href="https://www.tagtoo.com"
          className="border-b border-zinc-300 pb-[2px] font-bold text-zinc-800 transition duration-300 ease-in-out hover:border-zinc-500 dark:border-zinc-500 dark:text-zinc-50 dark:hover:border-zinc-300"
        >
          Tagtoo
        </ExternalLink>
        .
      </p>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Container>{page}</Container>;
};

export default Page;
