import type { ReactElement } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import type { NextPageWithLayout } from '../_app';

import { getCategoryFormatted } from '@/helpers/category.helper';
import { getAllMdxFolder } from '@/helpers/mdx.helpers';

import Container from '@/components/Container';
import Hero from '@/components/Hero';

const title = `Snippets`;
const description = `Collection of useful code snippets.`;

type Snippets = {
  category: string;
  date: string;
  description: string;
  slug: string;
  title: string;
  [key: string]: any;
};

const Page: NextPageWithLayout = ({ snippets }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {snippets.map((snippet: Snippets) => {
        const { title, description, category, slug, date } = snippet;

        const languageIcon = getCategoryFormatted(category)?.icon;
        const formatDate = new Intl.DateTimeFormat('en', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })?.format(new Date(date));

        return (
          <Link href={slug} key={title + category} passHref>
            <a className="flex min-h-[120px] md:min-h-[150px] cursor-pointer gap-6 rounded-md border border-zinc-100 p-4 shadow-md transition-all duration-150 ease-out dark:border-zinc-800  md:dark:hover:border-zinc-600">
              <div className="flex flex-1 flex-col justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
                </div>
                <span className="text-sm italic tracking-tighter text-zinc-600 dark:text-zinc-400">
                  <span className="pr-2">Last Updated:</span>
                  {formatDate}
                </span>
              </div>
              <div className="h-8 w-8 pt-2">{languageIcon}</div>
            </a>
          </Link>
        );
      })}
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

export const getStaticProps: GetStaticProps = async () => {
  const snippets: Snippets[] = await getAllMdxFolder('content/snippets');

  return { props: { snippets } };
};

export default Page;
