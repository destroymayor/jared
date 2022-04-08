import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';

import useInView from '@/hooks/use-in-view.hook';

export default function FadeInScrollContainer(props) {
  const { children, className } = props;
  const controls = useAnimation();
  const { ref, isVisible } = useInView();

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    }

    return () => {
      controls.stop();
    };
  }, [controls, isVisible]);

  return (
    <motion.div
      {...props}
      ref={ref}
      initial="hidden"
      className={className}
      animate={controls}
      variants={{
        visible: { opacity: 1, transition: { duration: 1, delay: 0.1 } },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
