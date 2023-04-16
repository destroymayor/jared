import React, { useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';
import InPortal from '@/components/InPortal';

import { useToast } from './Provider';
import Toast from './Toast';

interface HeightType {
  height: number;
  toastId: string | undefined;
}

export default function Container() {
  const { toasts, closeToast } = useToast();

  const [isHovering, setHovering] = React.useState<boolean>(false);
  const [heights, setHeights] = React.useState<HeightType[]>([]);

  const toastRef = React.useRef<HTMLLIElement>(null);

  useEffect(() => {
    const node = toastRef.current;

    if (node) {
      const clientHeight = node?.clientHeight;
      const toastId = node?.dataset?.projectionId;

      setHeights((prevState) => [{ height: clientHeight, toastId }, ...prevState]);
    }
  }, [toasts, setHeights]);

  useEffect(() => {
    if (toasts.length === 0) setHovering(false);
  }, [toasts.length]);

  const handleCloseToast = (closeId: string) => {
    closeToast(closeId);
    setHeights((prevState) => prevState.filter((toast) => toast.toastId !== closeId));
  };

  return (
    <InPortal>
      <ul
        className="fixed bottom-2 left-2 right-2 sm:bottom-8 sm:right-8"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <AnimatePresence initial={false}>
          {toasts.map((toast, index) => (
            <Toast
              key={toast.id}
              ref={toastRef}
              isHovering={isHovering}
              index={index}
              toast={toast}
              heights={heights}
              onClose={(closeId) => handleCloseToast(closeId)}
            />
          ))}
        </AnimatePresence>
      </ul>
    </InPortal>
  );
}
