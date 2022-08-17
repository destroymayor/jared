import type { ReactElement } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import type { NextPageWithLayout } from '../_app';

import { getCategoryFormatted, SNIPPET_CATEGORIES } from '@/helpers/category.helper';
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
};

const Page: NextPageWithLayout = ({ snippets }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const getCategories = SNIPPET_CATEGORIES.map((category) => category.slug);
  const filterSnippets = getCategories.map((item) => ({
    category: item,
    snippets: snippets.filter((el: any) => el.category === item),
  }));

  return (
    <ul className="flex flex-col gap-10">
      {filterSnippets.map((item) => {
        const getCategory = getCategoryFormatted(item.category)?.label;

        return (
          <li key={item.category}>
            <div className="relative flex flex-col gap-2">
              <h2 className="py-2 text-xl font-extrabold">{getCategory}</h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {item.snippets.map(
                  (snippet: {
                    title: string;
                    description: string;
                    category: string;
                    slug: string;
                    date: string;
                  }) => {
                    const { title, description, category, slug, date } = snippet;

                    const languageIcon = getCategoryFormatted(category)?.icon;
                    const formatDate = new Intl.DateTimeFormat('en', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })?.format(new Date(date));

                    return (
                      <Link href={slug} key={title + category}>
                        <div className="flex h-full cursor-pointer gap-6 rounded-md border border-zinc-100 bg-zinc-100 p-4 shadow-md transition-all duration-150 ease-out dark:border-zinc-900 dark:bg-zinc-900 md:hover:scale-[1.05] md:dark:hover:border-zinc-600">
                          <div className="flex flex-1 flex-col justify-between gap-6">
                            <div className="flex flex-col gap-2">
                              <h3 className="text-lg font-bold">{title}</h3>
                              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                {description}
                              </p>
                            </div>
                            <span className="text-sm italic tracking-tighter text-zinc-600 dark:text-zinc-400">
                              <span className="pr-2">Last Updated:</span>
                              {formatDate}
                            </span>
                          </div>
                          <div className="h-8 w-8 pt-2">{languageIcon}</div>
                        </div>
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
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
