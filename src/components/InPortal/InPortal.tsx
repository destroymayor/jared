'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useHasMounted from '@/hooks/use-has-mounted.hook';

export default function InPortal(props: { children: React.ReactNode }) {
  const { children } = props;
  const [hostElement, setHostElement] = useState<HTMLElement | null>(null);
  const hasMounted = useHasMounted();

  useEffect(() => {
    const elm = document.createElement('div');
    setHostElement(elm);

    if (hasMounted) {
      document.body.appendChild(elm);
    }

    return () => {
      if (hasMounted) {
        document.body.removeChild(elm);
      }
    };
  }, [hasMounted]);

  if (!hostElement) {
    return null;
  }

  return createPortal(children, hostElement);
}
