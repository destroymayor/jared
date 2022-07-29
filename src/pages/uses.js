import { MDXRemote } from 'next-mdx-remote';

import { COMPONENTS } from '@/helpers/mdx-components.helper';
import { getMdxFile } from '@/helpers/mdx.helpers';

import Container from '@/components/Container';
import Hero from '@/components/Hero';

const title = `My Gear`;
const description = `A list of tech equipment I currently use.`;

export default function Uses(props) {
  const { mdxSource } = props;

  return <MDXRemote {...mdxSource} components={COMPONENTS} />;
}

Uses.getLayout = function getLayout(page) {
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
    slug: 'uses',
  });

  return {
    props: {
      mdxSource,
    },
  };
}
