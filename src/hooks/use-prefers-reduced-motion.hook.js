import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';

export default function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(!window.matchMedia(QUERY).matches);

    const mediaQueryList = window.matchMedia(QUERY);

    const listener = (event) => {
      setPrefersReducedMotion(!event.matches);
    };

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      mediaQueryList.addListener(listener);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, [setPrefersReducedMotion]);

  return prefersReducedMotion;
}
