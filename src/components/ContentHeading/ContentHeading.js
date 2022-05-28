import clsx from 'clsx';

import Link from 'next/link';
import { LinkIcon } from '@/components/FeatherIcons';

export default function ContentHeading(props) {
  const { children, className } = props;

  const getHeadingId = children?.toLowerCase().replace(new RegExp(' ', 'g'), '-');

  return (
    <Link passHref href={`#${getHeadingId}`}>
      <h2
        {...props}
        aria-hidden
        id={getHeadingId}
        className={clsx('group flex cursor-pointer items-center gap-x-2 text-2xl', className)}
      >
        {children}
        <LinkIcon className="invisible h-5 w-5 transition duration-150 ease-in-out group-hover:visible" />
      </h2>
    </Link>
  );
}
