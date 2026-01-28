import { useState } from 'react';
import { usePathname } from 'next/navigation';

const loadedImages = new Set<string>();

export default function useImageLoadedState(src: string) {
    const pathname = usePathname();
    const uniqueImagePath = `${pathname}__${src}`;
    const [loaded, setLoaded] = useState(() => loadedImages.has(uniqueImagePath));

    return [
        loaded,
        () => {
            if (loaded) return;

            loadedImages.add(uniqueImagePath);
            setLoaded(true);
        },
    ] as const;
}
