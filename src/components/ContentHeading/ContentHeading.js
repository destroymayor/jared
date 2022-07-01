import clsx from 'clsx';

import Link from 'next/link';
import { LinkIcon } from '@/components/Icons';

export default function ContentHeading(props) {
  const { children, className } = props;

  const getHeadingId = children?.toLowerCase().replace(new RegExp(' ', 'g'), '-');

  return (
    <Link passHref href={`#${getHeadingId}`}>
      <h2
        {...props}
        aria-hidden
        id={getHeadingId}
        className={clsx(
          'group flex cursor-pointer items-center justify-start gap-x-2 px-2 py-3',
          className
        )}
      >
        <span className="bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text text-xl font-extrabold text-transparent">
          {children}
        </span>

        <LinkIcon className="invisible h-4 w-4 text-zinc-600 transition duration-150 ease-in-out group-hover:visible dark:text-zinc-500" />
      </h2>
    </Link>
  );
}
