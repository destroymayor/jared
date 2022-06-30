import { forwardRef } from 'react';

import clsx from 'clsx';

export default forwardRef(function Tabs(props, ref) {
  const { children, className } = props;

  return (
    <button {...props} className={clsx('p-2', className)} ref={ref}>
      {children}
    </button>
  );
});
