import MDXRemote, { COMPONENTS } from '@/helpers/mdx-components.helper';
import { getMDXSourcePaths, getMDXSource } from '@/helpers/mdx.helpers';
import Giscus from '@/components/Giscus';

export async function generateStaticParams() {
  const paths = await getMDXSourcePaths('content/snippets');

  return paths;
}

export default async function Page({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) {
  const { lang, slug } = params;

  const { mdxSource, data } = await getMDXSource({
    dirPath: `content/snippets/${lang}`,
    slug,
  });
  const { title, description, date } = data;

  const formatDate = date
    ? new Intl.DateTimeFormat('en', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(new Date(date))
    : 'unknown';

  return (
    <>
      <header className="pt-2 md:pt-8">
        <h1 className="py-2 text-4xl font-extrabold">{title}</h1>
        <p className="pt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
      </header>
      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />
      <MDXRemote {...mdxSource} components={COMPONENTS} />
      <span className="flex justify-center gap-2 pb-10 text-sm italic text-zinc-600 dark:text-zinc-400 sm:text-base">
        <span>Last Updated:</span>
        <time dateTime={date} className="font-semibold">
          {formatDate}
        </time>
      </span>
      <Giscus
        repo="destroymayor/jared"
        repoId="R_kgDOGHtW6w"
        category="Announcements"
        categoryId="DIC_kwDOGHtW684CQkkf"
        mapping="title"
        loading="lazy"
      />
    </>
  );
}
