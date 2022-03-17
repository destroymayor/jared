import { MDXProvider } from '@mdx-js/react';
import { MDXRemote } from 'next-mdx-remote';
import { getMdxFile } from '@/helpers/mdx.helpers';

const title = `Quotes`;
const description = `Collection of famous quotes.`;

Quotes.title = title;
Quotes.description = description;

const components = {
  h2: (props) => (
    <h2 {...props} className="mt-4 mb-6 animate-fade-up text-xl">
      {props?.children}
    </h2>
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="animate-fade-up border-l-4 border-gray-400 py-3 px-4 text-lg italic dark:border-gray-600"
    >
      {props?.children}
    </blockquote>
  ),
};

export default function Quotes(props) {
  const { source } = props;

  return (
    <>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="text-md py-4 dark:text-gray-400 sm:text-lg">{description}</p>

      <MDXProvider components={components}>
        <MDXRemote {...source} lazy />
      </MDXProvider>
    </>
  );
}

export async function getStaticProps() {
  const { mdxSource } = await getMdxFile('src/data', 'quotes');

  return {
    props: {
      source: mdxSource,
    },
    revalidate: 120,
  };
}
