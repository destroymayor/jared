import { useState, useEffect } from 'react';

export default function useHasMounted() {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}
