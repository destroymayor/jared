/* eslint-disable react/display-name */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import Head from '@/components/Head/Head';
import CodeBlock from '@/components/Common/CodeBlock';

import { MDXProvider } from '@mdx-js/react';
import { MDXRemote } from 'next-mdx-remote';
import { mdxFilePaths } from '@/utils/mdxUtils';

const components = {
  h2: (props) => <h2 {...props} aria-hidden className="pt-20 text-2xl text-center"></h2>,
  code: CodeBlock,
};

export default function SnippetPage(props) {
  const { source, frontMatter } = props;

  return (
    <>
      <Head title="Snippets" />
      <MDXProvider components={components}>
        <div className="flex flex-col items-center gap-y-5">
          <h3 className="text-lg text-blue-600">SNIPPET</h3>
          <h1 className="text-3xl text-center">{frontMatter.title}</h1>
          <p className="text-xl text-center">{frontMatter.description}</p>
          <ul className="flex gap-2">
            {frontMatter.techStack.map((item) => (
              <li key={item} className="px-2 py-1 bg-blue-600 rounded-md">
                {item}
              </li>
            ))}
          </ul>
          <MDXRemote {...source} lazy />
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
