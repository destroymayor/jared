import { MDXRemote } from 'next-mdx-remote';
import { getMdxFile } from '@/helpers/mdx.helpers';

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

  return (
    <>
      <h1 className="text-2xl sm:text-3xl">{title}</h1>
      <p className="mb-6 border-b border-dashed border-zinc-600 pt-2 pb-6 dark:text-zinc-400">
        {description}
      </p>
      <MDXRemote {...mdxSource} lazy components={components} />
    </>
  );
}

export async function getStaticProps() {
  const { mdxSource } = await getMdxFile('src/data', 'quotes');

  return {
    props: {
      mdxSource,
    },
    revalidate: 720,
  };
}
