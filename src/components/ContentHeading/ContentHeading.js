import Link from '@/components/Link';
import { LinkIcon } from '@/components/FeatherIcons';

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