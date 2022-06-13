import { MDXRemote } from 'next-mdx-remote';

import { COMPONENTS } from '@/helpers/mdx-components.helper';
import { getMdxFile } from '@/helpers/mdx.helpers';

import Container from '@/components/Container';
import Hero from '@/components/Hero';

const title = `Bookmarks`;
const description = `Collection of useful tools website.`;

export default function Bookmarks(props) {
  const { mdxSource } = props;

  return <MDXRemote {...mdxSource} components={COMPONENTS} />;
}

Bookmarks.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />
      {page}
    </Container>
  );
};

export async function getStaticProps() {
  const { mdxSource } = await getMdxFile({
    dirPath: `content`,
    slug: 'bookmarks',
  });

  return {
    props: {
      mdxSource,
    },
  };
}
