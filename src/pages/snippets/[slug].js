import { MDXRemote } from 'next-mdx-remote';

import { mdxFilePaths, getMdxFile } from '@/helpers/mdx.helpers';
import { COMPONENTS } from '@/helpers/mdx-components.helper';

import Container from '@/components/Container';

export default function SnippetPage(props) {
  const { mdxSource, frontMatter } = props;

  const title = frontMatter.title;
  const description = frontMatter.description;

  return (
    <Container title={title} description={description}>
      <div className="flex flex-col gap-y-5 pt-2 md:pt-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-lg uppercase text-sky-700 dark:text-sky-600">Snippet</div>
          <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
          <p className="text-center text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>

        <div className="w-full">
          <MDXRemote {...mdxSource} components={COMPONENTS} />
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const { mdxSource, data } = await getMdxFile({ dirPath: '/snippets', slug: params.slug });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = mdxFilePaths('src/data/snippets')
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
