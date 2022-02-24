import { useEffect } from 'react';

const useScrollDisabler = (disabled) => {
  useEffect(() => {
    if (!disabled) {
      return;
    }

    const oldOverflow = document.body.style.overflow;
    const oldPosition = document.body.style.position;
    const oldWidth = document.body.style.width;
    const oldHeight = document.body.style.height;
    const oldTop = document.body.style.top;

    const oldScrollY = window.scrollY;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = `calc(100% + ${oldScrollY}px)`;
    document.body.style.top = `-${oldScrollY}px`;

    return () => {
      document.body.style.overflow = oldOverflow;
      document.body.style.position = oldPosition;
      document.body.style.width = oldWidth;
      document.body.style.height = oldHeight;
      document.body.style.top = oldTop;

      window.scrollTo(0, oldScrollY);
    };
  }, [disabled]);
};

export default useScrollDisabler;
