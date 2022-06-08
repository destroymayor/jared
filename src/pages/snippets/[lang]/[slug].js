import SnippetLayout from '@/layouts/snippets';
import { getMdxFilePaths, getMdxFile } from '@/helpers/mdx.helpers';

export default function SnippetPage(props) {
  const { mdxSource, frontMatter } = props;

  return <SnippetLayout frontMatter={frontMatter} mdxSource={mdxSource} />;
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
