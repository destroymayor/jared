/* eslint-disable jsx-a11y/accessible-emoji */
import { useSpring, animated } from 'react-spring';

const Wave = () => {
  const config = {
    from: { rotateZ: 0 },
    to: [{ rotateZ: 50 }, { rotateZ: 0 }, { rotateZ: 5 }, { rotateZ: 0 }],
    config: { duration: 150 },
  };

  const [styles, animate] = useSpring(() => ({ ...config, delay: 700 }));

  return (
    <animated.span
      onMouseOver={() => animate.start({ ...config, delay: 100 })}
      role="img"
      aria-label="hand wave"
      className="text-2xl cursor-default md:text-4xl"
      style={styles}
    >
      👋
    </animated.span>
  );
};

export default Wave;
