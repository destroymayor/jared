import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '../../_app';
import { ParsedUrlQuery } from 'querystring';

import { MDXRemote } from 'next-mdx-remote';

import { COMPONENTS } from '@/helpers/mdx-components.helper';
import { getMdxFilePaths, getMdxFile } from '@/helpers/mdx.helpers';

import SnippetLayout from '@/layouts/snippets';

const Page: NextPageWithLayout = ({
  mdxSource,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, description, date } = frontMatter;

  return (
    <SnippetLayout title={title} description={description} date={date}>
      <MDXRemote {...mdxSource} components={COMPONENTS} />
    </SnippetLayout>
  );
};

interface IParams extends ParsedUrlQuery {
  lang: string;
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { lang, slug } = context.params as IParams;

  const { mdxSource, data } = await getMdxFile({
    dirPath: `content/snippets/${lang}`,
    slug,
  });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getMdxFilePaths('content/snippets');

  return {
    paths: paths.map((item: { folder: string; slug: string }) => ({
      params: {
        lang: item.folder,
        slug: item.slug,
      },
    })),
    fallback: false,
  };
};

export default Page;
