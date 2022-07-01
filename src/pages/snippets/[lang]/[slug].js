import { MDXRemote } from 'next-mdx-remote';

import { COMPONENTS } from '@/helpers/mdx-components.helper';
import { getMdxFilePaths, getMdxFile } from '@/helpers/mdx.helpers';

import Link from '@/components/Link';
import Container from '@/components/Container';
import { ChevronLeftIcon } from '@/components/Icons';

export default function SnippetPage(props) {
  const { mdxSource, frontMatter } = props;
  const { title, description, date } = frontMatter;

  const formatDate =
    new Intl.DateTimeFormat('en', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })?.format(new Date(date)) ?? 'unknown';

  return (
    <Container title={title} description={description}>
      <div className="flex flex-col items-start gap-4 py-10">
        <Link
          href="/snippets"
          className="my-2 flex items-center gap-2 font-semibold text-zinc-600 transition duration-200 ease-in-out hover:text-sky-800 dark:text-zinc-400 dark:hover:text-sky-600"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="text-sm">Back to snippets</span>
        </Link>
        <time dateTime={date} className="text-xs text-zinc-600 dark:text-zinc-400">
          {formatDate}
        </time>
        <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>

      <MDXRemote {...mdxSource} components={COMPONENTS} />
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const { lang, slug } = params;
  const { mdxSource, data } = await getMdxFile({
    dirPath: `content/snippets/${lang}`,
    slug,
  });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getMdxFilePaths('content/snippets');

  return {
    paths: paths.map((item) => ({
      params: {
        lang: item.folder,
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
