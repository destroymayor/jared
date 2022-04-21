import Link from '@/components/Common/Link';
import { LinkIcon } from '@heroicons/react/outline';

export default function ContentHeading(props) {
  const { children } = props;

  const getHeadingId = children?.toLowerCase().replace(new RegExp(' ', 'g'), '-');

  return (
    <h2 {...props} aria-hidden id={getHeadingId} className="group text-2xl">
      <Link className="flex items-center gap-x-2" href={`#${getHeadingId}`}>
        {children}
        <LinkIcon className="invisible h-6 w-6 transition duration-150 ease-in-out group-hover:visible " />
      </Link>
    </h2>
  );
}
