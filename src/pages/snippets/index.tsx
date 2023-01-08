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

type SnippetsType = {
  category: string;
  date: string;
  description: string;
  slug: string;
  title: string;
  [key: string]: unknown;
};

const Page: NextPageWithLayout = ({ snippets }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      {snippets.map((snippet: SnippetsType) => {
        const { title, description, category, slug, date } = snippet;

        const languageIcon = getCategoryFormatted(category)?.icon;
        const formatDate = new Intl.DateTimeFormat('en', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })?.format(new Date(date));

        return (
          <Link
            href={slug}
            key={title + category}
            className="group mt-4 flex cursor-pointer gap-6 rounded-md p-4 transition-all duration-150 ease-out"
          >
            <div className="h-8 w-8 pt-2">{languageIcon}</div>
            <div>
              <h3 className="text-lg font-bold group-hover:text-sky-600">{title}</h3>
              <p className="pb-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
              <span className="text-sm italic tracking-tighter text-zinc-600 dark:text-zinc-400">
                {formatDate}
              </span>
            </div>
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
  const snippets: SnippetsType[] = await getAllMdxFolder('content/snippets');

  return { props: { snippets } };
};

export default Page;
