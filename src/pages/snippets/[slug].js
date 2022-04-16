import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { mdxFilePaths, getMdxFile } from '@/helpers/mdx.helpers';
import languageMapping from '@/helpers/language-mapping.helper';

import Layout from '@/layouts/layout';
import NextHead from '@/components/NextHead';
import CodeBlock from '@/components/CodeBlock';
import Link from '@/components/Common/Link';
import { LinkIcon } from '@heroicons/react/outline';

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
  h3: (props) => <h3 {...props} className="pt-2 text-lg"></h3>,
  Image: (props) => (
    <div className="my-5 flex items-center justify-center">
      <Image {...props} className="rounded-lg" alt="" />
    </div>
  ),
  code: CodeBlock,
};

export default function SnippetPage(props) {
  const { mdxSource, frontMatter } = props;

  return (
    <>
      <NextHead title={frontMatter.title} description={frontMatter.description} />
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center">
          <div className="flex flex-1 flex-col gap-y-3">
            <h1 className="text-2xl sm:text-3xl">{frontMatter.title}</h1>
            <p className="text-zinc-600 dark:text-zinc-400">{frontMatter.description}</p>
          </div>
          <div className="flex flex-[0.3] items-center justify-center ">
            <span className="h-14 w-14">{languageMapping?.[frontMatter?.category]?.icon}</span>
          </div>
        </div>

        <div className="w-full">
          <MDXRemote {...mdxSource} lazy components={components} />
        </div>
      </div>
    </>
  );
}

SnippetPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const { mdxSource, data } = await getMdxFile('src/data/snippets', params.slug);

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
    revalidate: 720,
  };
}

export async function getStaticPaths() {
  const paths = mdxFilePaths('src/data/snippets')
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
