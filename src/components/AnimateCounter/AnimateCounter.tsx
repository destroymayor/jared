'use client';

import { useEffect, useRef } from 'react';

import { animate } from 'framer-motion';
import useInView from '@/hooks/use-in-view.hook';

export default function AnimateCounter(props: {
    className?: string;
    total: number | undefined;
}) {
    const { className, total = 0 } = props;
    const countRef = useRef<HTMLElement>(null);
    const { ref: inViewRef, isInView } = useInView({ once: true });

    const initialCount = 0;

    useEffect(() => {
        const count = countRef.current;

        if (Number.isNaN(total) || !count) {
            return;
        }

        const controls = animate(initialCount, total, {
            duration: 1,
            onUpdate(value: number) {
                if (isInView) count!.textContent = Math.floor(value).toString();
            },
        });

        return () => controls.stop();
    }, [total, isInView]);

    return (
        <span ref={inViewRef}>
            <span {...props} ref={countRef} className={className}>
                {0}
            </span>
        </span>
    );
}
