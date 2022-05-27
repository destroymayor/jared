import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';

import useInView from '@/hooks/use-in-view.hook';

export default function FadeInScrollContainer(props) {
  const { as = 'div', children, className } = props;
  const controls = useAnimation();
  const { ref, isVisible } = useInView();

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, transition: { duration: 0.8 } });
    }

    return () => {
      controls.stop();
    };
  }, [controls, isVisible]);

  const Component = motion?.[as];

  return (
    <Component
      {...props}
      ref={ref}
      initial={{ opacity: 0 }}
      className={className}
      animate={controls}
    >
      {children}
    </Component>
  );
}