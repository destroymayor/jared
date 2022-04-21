import { MDXRemote } from 'next-mdx-remote';

import { mdxFilePaths, getMdxFile } from '@/helpers/mdx.helpers';
import { getCategoryFormatted } from '@/helpers/category.helper';
import { COMPONENTS } from '@/helpers/mdx-components.helper';

import Container from '@/components/Container';

export default function SnippetPage(props) {
  const { mdxSource, frontMatter } = props;

  const title = frontMatter.title;
  const description = frontMatter.description;
  const languageIcon = getCategoryFormatted(frontMatter?.category)?.icon;

  return (
    <Container title={title} description={description}>
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center">
          <div className="flex flex-1 flex-col gap-y-3">
            <h1 className="text-2xl sm:text-3xl">{title}</h1>
            <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
          </div>
          <div className="flex flex-[0.3] items-center justify-center">
            <span className="h-14 w-14">{languageIcon}</span>
          </div>
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
