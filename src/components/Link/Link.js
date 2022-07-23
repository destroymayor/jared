import NextLink from 'next/link';

export default function Link({ href, target, rel, getProps, ...delegated }) {
  let linkType;

  if (href && href?.match(/^#/)) {
    linkType = 'hash';
  } else if (href?.match(/(^http|^mailto)/i) || target === '_blank') {
    linkType = 'external';
  } else {
    linkType = 'internal';
  }

  if (typeof target === 'undefined') {
    target = linkType === 'external' ? '_blank' : undefined;
  }

  const safeRel = target === '_blank' ? 'noopener noreferrer' : rel;

  if (linkType === 'internal') {
    return (
      <NextLink passHref href={href} target={target} rel={safeRel}>
        <a {...delegated} />
      </NextLink>
    );
  }

  return <a href={href} rel={safeRel} target={target} {...delegated} />;
}
