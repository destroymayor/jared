import { memo } from 'react';

import { useSpring, animated } from 'react-spring';

const CircleSpring = (props) => {
  const { delay = 0, className, style, children } = props;

  const { x } = useSpring({
    from: { x: 0 },
    x: 1,
    delay,
    config: { duration: 800 },
  });

  return (
    <animated.div
      className={className}
      style={{
        ...style,
        scale: x.to({
          range: [0, 0.25, 0.5, 1],
          output: [0, 1, 0.95, 1],
        }),
      }}
    >
      {children}
    </animated.div>
  );
};

export default memo(CircleSpring);
