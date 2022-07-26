import { useEffect } from 'react';

export default function useKeyPress(keyCode, handler) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === keyCode) {
        handler(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyCode, handler]);
}
