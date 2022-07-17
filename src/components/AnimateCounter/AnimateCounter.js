import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { animate } from 'framer-motion';

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

  return <span {...props} ref={countRef} />;
}

AnimateCounter.propTypes = {
  total: PropTypes.number,
};
