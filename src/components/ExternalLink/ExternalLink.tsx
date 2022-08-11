import type { ReactNode } from 'react';

type Props = {
  href: string;
  className?: string;
  delegated?: any;
  children?: ReactNode;
};

export default function ExternalLink(props: Props) {
  const { href, className, children, delegated } = props;

  return (
    <a className={className} target="_blank" rel="noopener noreferrer" href={href} {...delegated}>
      {children}
    </a>
  );
}
