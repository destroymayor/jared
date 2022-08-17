import type { ReactNode } from 'react';
import Link from 'next/link';

import Container from '@/components/Container';
import Giscus from '@/components/Giscus';
import { ChevronLeftIcon } from '@/components/Icons';

type Props = {
  title: string;
  description: string;
  date: string;
  children: ReactNode;
};

export default function SnippetLayout(props: Props) {
  const { title, description, date, children } = props;

  const formatDate =
    new Intl.DateTimeFormat('en', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })?.format(new Date(date)) ?? 'unknown';

  return (
    <Container title={title} description={description}>
      <header className="flex flex-col items-start gap-4">
        <Link href="/snippets">
          <span className="flex cursor-pointer items-center gap-2 font-semibold text-zinc-600 transition duration-200 ease-in-out hover:text-sky-800 dark:text-zinc-400 dark:hover:text-sky-600">
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="text-sm">Back to snippets</span>
          </span>
        </Link>

        <h1 className="text-2xl pt-4 font-semibold sm:text-3xl">{title}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
      </header>

      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />

      {children}

      <span className="flex pb-10 justify-center sm:text-base text-sm text-zinc-600 dark:text-zinc-400 italic gap-2">
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
      />
    </Container>
  );
}
