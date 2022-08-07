import type { ReactElement } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from './_app';

import { MDXRemote } from 'next-mdx-remote';

import { COMPONENTS } from '@/helpers/mdx-components.helper';
import { getMdxFile } from '@/helpers/mdx.helpers';

import Container from '@/components/Container';
import Hero from '@/components/Hero';

const title = `Bookmarks`;
const description = `Collection of useful tools website.`;

const Page: NextPageWithLayout = ({
  mdxSource,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <MDXRemote {...mdxSource} components={COMPONENTS} />;
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
  const { mdxSource } = await getMdxFile({
    dirPath: `content`,
    slug: 'bookmarks',
  });

  return {
    props: {
      mdxSource,
    },
  };
};

export default Page;
