import BlogLayout from '@/layouts/blog';
import { getMdxFilePaths, getMdxFile } from '@/helpers/mdx.helpers';

export default function BlogPage(props) {
  const { mdxSource, frontMatter } = props;

  return <BlogLayout frontMatter={frontMatter} mdxSource={mdxSource} />;
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { mdxSource, data } = await getMdxFile({ dirPath: 'content/blog', slug });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getMdxFilePaths('content/blog');

  return {
    paths: paths.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
