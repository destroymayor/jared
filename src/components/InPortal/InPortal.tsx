'use client';

import { useState, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
};

export default function InPortal(props: Props) {
  const { children } = props;
  const [hostElement, setHostElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const elm = document.createElement('div');
    setHostElement(elm);

    document?.body?.appendChild(elm);

    return () => {
      document?.body?.removeChild(elm);
    };
  }, []);

  if (!hostElement) {
    return null;
  }

  return createPortal(children, hostElement);
}
