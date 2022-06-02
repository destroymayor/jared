import { MDXRemote } from 'next-mdx-remote';
import { getMdxFile } from '@/helpers/mdx.helpers';
import { COMPONENTS } from '@/helpers/mdx-components.helper';

import Container from '@/components/Container';
import Hero from '@/components/Hero';

const title = `Quotes`;
const description = `Collection of famous quotes.`;

export default function Quotes(props) {
  const { mdxSource } = props;

  return <MDXRemote {...mdxSource} components={COMPONENTS} />;
}

Quotes.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />

      {page}
    </Container>
  );
};

export async function getStaticProps() {
  const { mdxSource } = await getMdxFile({ dirPath: '', slug: 'quotes' });

  return {
    props: {
      mdxSource,
    },
  };
}
