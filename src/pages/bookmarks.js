import { MDXProvider } from '@mdx-js/react';
import { MDXRemote } from 'next-mdx-remote';
import { getMdxFile } from '@/helpers/mdx.helpers';

import Link from '@/components/Common/Link';
import FadeInSection from '@/components/Common/FadeInSection';
import { LinkIcon } from '@heroicons/react/outline';

const title = `Bookmarks`;
const description = `Collection of useful tools website.`;

Bookmarks.title = title;
Bookmarks.description = description;

const components = {
  Title: (props) => (
    <div className="flex items-center text-lg dark:text-zinc-200">{props.children}</div>
  ),
  Url: (props) => <span>{props.children}</span>,
  Description: (props) => <span className="text-sm text-zinc-500">{props.children}</span>,
  ul: (props) => <ul className="mx-4 flex list-disc flex-col">{props?.children}</ul>,
  li: (props) => (
    <li {...props}>
      <FadeInSection className="my-2 flex flex-col items-start">{props?.children}</FadeInSection>
    </li>
  ),
  a: (props) => (
    <Link
      className="flex cursor-pointer items-center gap-1 text-sm text-zinc-500 hover:underline"
      href={props?.href}
    >
      <LinkIcon className="h-4 w-4" />
      <span>{props?.children}</span>
    </Link>
  ),
};

export default function Bookmarks(props) {
  const { source } = props;

  return (
    <>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="text-md pt-4 pb-2 dark:text-gray-400 sm:text-lg">{description}</p>

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
