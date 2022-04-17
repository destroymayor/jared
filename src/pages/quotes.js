import { MDXRemote } from 'next-mdx-remote';
import { getMdxFile } from '@/helpers/mdx.helpers';

import MainLayout from '@/layouts/main-layout';

const title = `Quotes`;
const description = `Collection of famous quotes.`;

Quotes.title = title;
Quotes.description = description;

const components = {
  h2: (props) => (
    <h2 {...props} className="mt-2 mb-10 text-lg">
      {props?.children}
    </h2>
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-4 border-zinc-400 py-3 px-4 italic dark:border-zinc-600"
    >
      {props?.children}
    </blockquote>
  ),
};

export default function Quotes(props) {
  const { mdxSource } = props;

  return <MDXRemote {...mdxSource} lazy components={components} />;
}

Quotes.getLayout = function getLayout(page) {
  return (
    <MainLayout title={title} description={description}>
      {page}
    </MainLayout>
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
