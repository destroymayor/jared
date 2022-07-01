import { forwardRef } from 'react';

import clsx from 'clsx';
import Link from '@/components/Link';

export default forwardRef(function Tabs(props, ref) {
  const { children, className, value } = props;

  return (
    <Link {...props} ref={ref} href={value} className={clsx('inline-block p-2', className)}>
      {children}
    </Link>
  );
});
