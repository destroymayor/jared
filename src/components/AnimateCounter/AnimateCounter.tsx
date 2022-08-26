import { useEffect, useRef } from 'react';

import { animate } from 'framer-motion';

type Props = {
  className: string;
  total: number;
};

export default function AnimateCounter(props: Props) {
  const { className, total } = props;
  const countRef = useRef<HTMLElement>(null);

  const initialCount = 0;

  useEffect(() => {
    const count: any = countRef.current;

    const controls = animate(initialCount, total, {
      duration: 1,
      onUpdate(value) {
        count!.textContent = Math.floor(value);
      },
    });

    return () => controls.stop();
  }, [total]);

  return (
    <span {...props} ref={countRef} className={className}>
      {0}
    </span>
  );
}
