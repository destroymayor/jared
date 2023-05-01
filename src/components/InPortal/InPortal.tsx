'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function InPortal(props: { children: React.ReactNode }) {
  const { children } = props;
  const [hostElement, setHostElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const elm = document.createElement('div');
    setHostElement(elm);

    document.body.appendChild(elm);

    return () => {
      document.body.removeChild(elm);
    };
  }, []);

  if (!hostElement) {
    return null;
  }

  return createPortal(children, hostElement);
}
