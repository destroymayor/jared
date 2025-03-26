import { useState, useEffect } from 'react';

interface WindowSize {
    width: number;
    height: number;
}

export default function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
} 
