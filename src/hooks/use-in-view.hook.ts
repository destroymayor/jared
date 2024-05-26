import { useRef } from 'react';
import { useInView as useFramerMotionInView } from 'framer-motion';

export default function useInView(options?: any) {
    const ref = useRef<HTMLElement>(null);

    const isInView = useFramerMotionInView(ref, options);

    return { isInView, ref };
}
