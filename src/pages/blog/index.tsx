import type { ReactElement } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '../_app';

import { getAllMdxFolder } from '@/helpers/mdx.helpers';

import Container from '@/components/Container';
import Hero from '@/components/Hero';

const title = `Blog`;
const description = `Write something here.`;

const Page: NextPageWithLayout = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (posts.length === 0) {
    return <div>{`I'm little lazy...`}</div>;
  }

  return <ul className="flex flex-col gap-10">{}</ul>;
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
  const posts = await getAllMdxFolder('content/posts');

  return { props: { posts } };
};

export default Page;
