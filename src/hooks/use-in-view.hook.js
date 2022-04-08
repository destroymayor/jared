import { useState, useEffect, useRef } from 'react';

export default function useInView(options) {
  const ref = useRef();
  const [isVisible, setIntersectionState] = useState(null);

  const intersectionCallback = (entries) => {
    const [entry] = entries;
    setIntersectionState(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, {
      ...options,
      rootMargin: '0px 0px -100px 0px',
    });

    if (ref.current) observer.observe(ref?.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { isVisible, ref };
}
