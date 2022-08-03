import Container from '@/components/Container';
import Link from '@/components/Link';
import { ChevronLeftIcon } from '@/components/Icons';

export default function SnippetLayout(props) {
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
      <div className="flex flex-col items-start gap-4">
        <Link
          href="/snippets"
          className="flex items-center gap-2 font-semibold text-zinc-600 transition duration-200 ease-in-out hover:text-sky-800 dark:text-zinc-400 dark:hover:text-sky-600"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="text-sm">Back to snippets</span>
        </Link>

        <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>

      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />

      {children}

      <time dateTime={date} className="text-xs text-zinc-600 dark:text-zinc-400">
        {formatDate}
      </time>
    </Container>
  );
}
