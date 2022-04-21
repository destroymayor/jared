import { MDXRemote } from 'next-mdx-remote';
import { getMdxFile } from '@/helpers/mdx.helpers';
import { COMPONENTS } from '@/helpers/mdx-components.helper';

import Container from '@/components/Container';

const title = `Quotes`;
const description = `Collection of famous quotes.`;

export default function Quotes(props) {
  const { mdxSource } = props;

  return <MDXRemote {...mdxSource} components={COMPONENTS} />;
}

Quotes.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <h1 className="text-3xl">{title}</h1>
      <p className="pt-2 dark:text-zinc-400">{description}</p>
      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />
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
    revalidate: 720,
  };
}
