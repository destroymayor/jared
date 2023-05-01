import { ReactNode } from 'react';
import clsx from 'clsx';

import Link from 'next/link';
import { LinkIcon } from '@/components/Icons';

export default function ContentHeading(props: { children: ReactNode | any; className: string }) {
  const { children, className } = props;

  const getHeadingId = children?.toLowerCase().replace(new RegExp(' ', 'g'), '-');

  return (
    <Link href={`#${getHeadingId}`}>
      <h2
        aria-hidden
        id={getHeadingId}
        className={clsx(
          'group flex cursor-pointer items-center justify-start gap-x-2 px-2 py-3',
          className
        )}
      >
        <span className="text-xl font-extrabold">{children}</span>

        <LinkIcon className="invisible h-4 w-4 text-zinc-600 transition duration-150 ease-in-out group-hover:visible dark:text-zinc-500" />
      </h2>
    </Link>
  );
}
