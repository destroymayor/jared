import { MDXRemote } from 'next-mdx-remote';

import { COMPONENTS } from '@/helpers/mdx-components.helper';
import { getMdxFilePaths, getMdxFile } from '@/helpers/mdx.helpers';

import SnippetLayout from '@/layouts/snippets';

export default function SnippetPage(props) {
  const { mdxSource, frontMatter } = props;
  const { title, description, date } = frontMatter;

  return (
    <SnippetLayout title={title} description={description} date={date}>
      <MDXRemote {...mdxSource} components={COMPONENTS} />
    </SnippetLayout>
  );
}

export async function getStaticProps({ params }) {
  const { lang, slug } = params;
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
}

export async function getStaticPaths() {
  const paths = await getMdxFilePaths('content/snippets');

  return {
    paths: paths.map((item) => ({
      params: {
        lang: item.folder,
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
