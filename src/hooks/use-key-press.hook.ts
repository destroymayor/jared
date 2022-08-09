import { useEffect } from 'react';

type Handler = (event: KeyboardEvent) => void;

export default function useKeyPress(keyCode: string, handler: Handler) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === keyCode) {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }

        handler(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyCode, handler]);
}
