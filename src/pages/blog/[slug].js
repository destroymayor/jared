import BlogLayout from '@/layouts/blog';
import { mdxFilePaths, getMdxFile } from '@/helpers/mdx.helpers';

export default function BlogPage(props) {
  const { mdxSource, frontMatter } = props;

  return <BlogLayout frontMatter={frontMatter} mdxSource={mdxSource} />;
}

export async function getStaticProps({ params }) {
  const { mdxSource, data } = await getMdxFile({ dirPath: '/blog', slug: params.slug });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = mdxFilePaths('src/data/blog')
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
