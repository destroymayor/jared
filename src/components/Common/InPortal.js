import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const InPortal = ({ children }) => {
  const [hostElement, setHostElement] = useState(null);

  useEffect(() => {
    const elm = document.createElement('div');
    setHostElement(elm);

    document.body.appendChild(elm);

    return () => {
      document.body.removeChild(elm);
    };
  }, []);

  if (!hostElement) {
    return null;
  }

  return createPortal(children, hostElement);
};

export default InPortal;
