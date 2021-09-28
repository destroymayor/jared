/* eslint-disable react/display-name */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import Head from '@/components/Head/Head';
import CodeBlock from '@/components/Common/CodeBlock';

import { MDXProvider } from '@mdx-js/react';
import { MDXRemote } from 'next-mdx-remote';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';

const components = {
  h2: (props) => <h2 {...props} className="pt-20 text-2xl text-center" />,
  code: CodeBlock,
};

export default function SnippetPage(props) {
  const { source, frontMatter } = props;

  return (
    <>
      <Head title="Snippets" />
      <MDXProvider components={components}>
        <div className="flex flex-col items-center">
          <div>SNIPPET</div>
          <h1 className="text-3xl text-center m-7">{frontMatter.title}</h1>
          <p className="mb-2 text-xl text-center mx-7">{frontMatter.description}</p>
          <MDXRemote {...source} lazy />
        </div>
      </MDXProvider>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

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
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};
