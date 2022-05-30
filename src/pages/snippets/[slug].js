import SnippetLayout from '@/layouts/snippets';
import { mdxFilePaths, getMdxFile } from '@/helpers/mdx.helpers';

export default function SnippetPage(props) {
  const { mdxSource, frontMatter } = props;

  return <SnippetLayout frontMatter={frontMatter} mdxSource={mdxSource} />;
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
