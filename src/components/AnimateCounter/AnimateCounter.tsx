import { useEffect, useRef } from 'react';

import { animate } from 'framer-motion';
import useInView from '@/hooks/use-in-view.hook';

interface AnimateCounterProps {
  className: string;
  total: number;
}

export default function AnimateCounter(props: AnimateCounterProps) {
  const { className, total } = props;
  const countRef = useRef<HTMLElement>(null);
  const { ref: inViewRef, isInView } = useInView({ once: true });

  const initialCount = 0;

  useEffect(() => {
    const count: any = countRef.current;

    const controls = animate(initialCount, total, {
      duration: 1,
      onUpdate(value) {
        if (isInView) count!.textContent = Math.floor(value);
      },
    });

    return () => controls.stop();
  }, [total, isInView]);

  return (
    <span ref={inViewRef}>
      <span {...props} ref={countRef} className={className}>
        {0}
      </span>
    </span>
  );
}
