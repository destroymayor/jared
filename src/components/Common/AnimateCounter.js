import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimateCounter(props) {
  const { total } = props;
  const countRef = useRef();

  const initialCount = 0;

  useEffect(() => {
    const count = countRef.current;

    const controls = animate(initialCount, total, {
      duration: 1,
      onUpdate(value) {
        count.textContent = Math.floor(value);
      },
    });

    return () => controls.stop();
  }, [total]);

  return <span ref={countRef} />;
}
