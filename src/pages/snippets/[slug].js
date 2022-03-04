/* eslint-disable react/display-name */
import router from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { MDXProvider } from '@mdx-js/react';
import { MDXRemote } from 'next-mdx-remote';

import { mdxFilePaths } from '@/utils/mdx-utils';
import languageMapping from '@/utils/language-mapping';

import Head from '@/components/Head';
import CodeBlock from '@/components/CodeBlock';
import Link from '@/components/Common/Link';
import { ChevronLeftIcon, LinkIcon } from '@heroicons/react/outline';

const components = {
  h2: (props) => {
    const getHeadingId = props?.children?.toLowerCase().replace(new RegExp(' ', 'g'), '-');
    return (
      <h2 {...props} aria-hidden id={getHeadingId} className="group text-2xl">
        <Link className="flex items-center gap-x-2" href={`#${getHeadingId}`}>
          {props?.children}
          <LinkIcon className="invisible h-6 w-6 transition duration-150 ease-in-out group-hover:visible " />
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
      <Head title={frontMatter.title} description={frontMatter.description} />
      <div className="flex flex-col gap-y-5">
        <div>
          <button
            onClick={handleBack}
            className="flex items-center rounded-md py-1 text-lg text-blue-500 transition duration-150 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            <ChevronLeftIcon className="h-6 w-6" />
            <span className="pr-2">Back</span>
          </button>
        </div>

        <div className="flex items-center">
          <div className="flex flex-1 flex-col gap-y-3">
            <h1 className="text-2xl sm:text-3xl">{frontMatter.title}</h1>
            <p className="text-md text-gray-600 dark:text-gray-400 sm:text-lg">
              {frontMatter.description}
            </p>
          </div>
          <div className="flex flex-[0.3] items-center justify-center ">
            <span className="h-14 w-14">{languageMapping?.[frontMatter?.category]?.icon}</span>
          </div>
        </div>

        <div className="w-full">
          <MDXProvider components={components}>
            <MDXRemote {...source} lazy />
          </MDXProvider>
        </div>
      </div>
    </>
  );
}

const MDX_FILE_PATH = path.join(process.cwd(), 'src/data/snippets');
export async function getStaticProps({ params }) {
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
}

export async function getStaticPaths() {
  const paths = mdxFilePaths(MDX_FILE_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
}
