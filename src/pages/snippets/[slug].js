/* eslint-disable react/display-name */
import router from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { MDXProvider } from '@mdx-js/react';
import { MDXRemote } from 'next-mdx-remote';
import { mdxFilePaths } from '@/utils/mdxUtils';

import Head from '@/components/Head/Head';
import CodeBlock from '@/components/Common/CodeBlock';
import Link from '@/components/Common/Link';
import { ChevronLeftIcon, LinkIcon } from '@heroicons/react/outline';

const components = {
  h2: (props) => {
    const getHeadingId = props?.children?.toLowerCase().replace(new RegExp(' ', 'g'), '-');
    return (
      <h2 {...props} aria-hidden id={getHeadingId} className="pt-10 text-2xl group">
        <Link className="flex items-center gap-x-2" href={`#${getHeadingId}`}>
          {props?.children}
          <LinkIcon className="invisible w-6 h-6 transition duration-150 ease-in-out group-hover:visible " />
        </Link>
      </h2>
    );
  },
  code: CodeBlock,
};

export default function SnippetPage(props) {
  const { source, frontMatter } = props;

  const handleBack = () => router.replace('/snippets');

  return (
    <>
      <Head title="Snippets" />
      <MDXProvider components={components}>
        <div className="flex flex-col items-start gap-y-5">
          <button onClick={handleBack} className="flex items-center text-lg text-blue-600">
            <ChevronLeftIcon className="w-6 h-6" /> <span className="pr-2">Back</span>
          </button>
          <h1 className="text-2xl sm:text-3xl">{frontMatter.title}</h1>
          <p className="text-gray-600 text-md sm:text-lg dark:text-gray-400">
            {frontMatter.description}
          </p>
          <ul className="flex gap-2">
            {frontMatter.techStack.map((item) => (
              <li key={item} className="px-2 py-1 text-gray-100 bg-blue-600 rounded-md">
                {item}
              </li>
            ))}
          </ul>
          <div className="w-full">
            <MDXRemote {...source} lazy />
          </div>
        </div>
      </MDXProvider>
    </>
  );
}

const MDX_FILE_PATH = path.join(process.cwd(), 'src/data/snippets');
export const getStaticProps = async ({ params }) => {
  const mdxFilePath = path.join(MDX_FILE_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(mdxFilePath);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
    revalidate: 120,
  };
};

export const getStaticPaths = async () => {
  const paths = mdxFilePaths(MDX_FILE_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
