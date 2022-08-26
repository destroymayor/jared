import type { ReactNode } from 'react';

import Container from '@/components/Container';
import Giscus from '@/components/Giscus';

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
      <header className="pt-2 md:pt-8">
        <h1 className="py-2 text-4xl font-extrabold">{title}</h1>
        <p className="pt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
      </header>

      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />

      {children}

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
      />
    </Container>
  );
}
