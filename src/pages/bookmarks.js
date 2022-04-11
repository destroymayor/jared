import { MDXRemote } from 'next-mdx-remote';
import { getMdxFile } from '@/helpers/mdx.helpers';

import Link from '@/components/Common/Link';
import { LinkIcon } from '@heroicons/react/outline';

const title = `Bookmarks`;
const description = `Collection of useful tools website.`;

Bookmarks.title = title;
Bookmarks.description = description;

const components = {
  Section: (props) => <div {...props} className="mb-6 pb-2" />,
  h2: (props) => <h2 {...props} className="pb-2 text-xl font-bold" />,
  ul: (props) => <ul {...props} className="ml-6 flex list-disc flex-col gap-3" />,
  Item: (props) => (
    <div {...props} className="flex items-center gap-2">
      {props?.children}
    </div>
  ),
  Title: (props) => <div {...props} className="flex items-center dark:text-zinc-200" />,
  Description: (props) => <span {...props} className="hidden text-sm text-zinc-500 md:block" />,
  Url: (props) => <span {...props} />,
  a: (props) => (
    <Link
      href={props?.href}
      className="flex cursor-pointer items-center gap-1 text-sm text-zinc-500 hover:underline"
    >
      <LinkIcon className="h-4 w-4" />
      {props?.children}
    </Link>
  ),
};

export default function Bookmarks(props) {
  const { mdxSource } = props;

  return (
    <>
      <h1 className="text-3xl">{title}</h1>
      <p className="pt-2 dark:text-zinc-400">{description}</p>
      <div className="my-6 border-b border-dashed border-zinc-700" />

      <MDXRemote {...mdxSource} components={components} />
    </>
  );
}

export async function getStaticProps() {
  const { mdxSource } = await getMdxFile('src/data', 'bookmarks');

  return {
    props: {
      mdxSource,
    },
    revalidate: 720,
  };
}
