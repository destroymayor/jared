import { MDXRemote } from 'next-mdx-remote';

import { COMPONENTS } from '@/helpers/mdx-components.helper';

import Container from '@/components/Container';
import ContentFooter from '@/components/ContentFooter';

export default function SnippetLayout({ frontMatter, mdxSource }) {
  const { title, description, humanReadableDate } = frontMatter;

  return (
    <Container title={title} description={description}>
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <div className="text-lg uppercase text-sky-700 dark:text-sky-600">Snippet</div>
        <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>

      <MDXRemote {...mdxSource} components={COMPONENTS} />

      <ContentFooter lastUpdated={humanReadableDate} />
    </Container>
  );
}
