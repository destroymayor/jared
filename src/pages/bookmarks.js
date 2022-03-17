import { MDXProvider } from '@mdx-js/react';
import { MDXRemote } from 'next-mdx-remote';
import { getMdxFile } from '@/helpers/mdx.helpers';

import Link from '@/components/Common/Link';

const title = `Bookmarks`;
const description = `Collection of useful tools website.`;

Bookmarks.title = title;
Bookmarks.description = description;

const components = {
  h2: (props) => (
    <h2 {...props} className="mt-6 text-xl">
      {props?.children}
    </h2>
  ),
  ul: (props) => <ul className="mx-4 flex list-disc flex-col">{props?.children}</ul>,
  li: (props) => (
    <li {...props} className="my-2 animate-fade-up text-zinc-500">
      {props?.children}
    </li>
  ),
  a: (props) => (
    <Link
      className="text-lg transition duration-200 ease-in-out dark:text-zinc-100"
      href={props?.href}
    >
      {props?.children}
    </Link>
  ),
};

export default function Bookmarks(props) {
  const { source } = props;

  return (
    <>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="text-md pt-4 dark:text-gray-400 sm:text-lg">{description}</p>

      <MDXProvider components={components}>
        <MDXRemote {...source} lazy />
      </MDXProvider>
    </>
  );
}

export async function getStaticProps() {
  const { mdxSource } = await getMdxFile('src/data', 'bookmarks');

  return {
    props: {
      source: mdxSource,
    },
    revalidate: 120,
  };
}
