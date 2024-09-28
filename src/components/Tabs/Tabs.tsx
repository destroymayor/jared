'use client';

import { createContext, useState, useRef } from 'react';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

import { directionType } from './constants';
import { TabsType } from './types';

interface ITabsContext {
    repositionHighlight: (rect: DOMRect, tab: any) => void;
    resetHighlight: () => void;
}

export const TabsContext = createContext<ITabsContext>({} as ITabsContext);

export default function Tabs(props: TabsType) {
    const { direction = 'horizontal', shouldResetHighlight, className, children } = props;

    const highlightRef = useRef<HTMLLIElement | null>(null);
    const wrapperRef = useRef<DOMRect | HTMLUListElement | any>(null);

    const [tabBoundingBox, setTabBoundingBox] = useState<DOMRect | null>(null);
    const [wrapperBoundingBox, setWrapperBoundingBox] = useState<DOMRect | null>(null);
    const [highlightedTab, setHighlightedTab] = useState<DOMRect | null>(null);
    const [isHoveredFromNull, setIsHoveredFromNull] = useState<Boolean>(true);

    const repositionHighlight = (rect: DOMRect, tab: DOMRect) => {
        setTabBoundingBox(rect);
        setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
        setIsHoveredFromNull(!highlightedTab);
        setHighlightedTab(tab);
    };

    const resetHighlight = () => {
        if (shouldResetHighlight) {
            setHighlightedTab(null);
        }
    };

    const highlightAnimate: any = tabBoundingBox &&
        wrapperBoundingBox && {
            height: tabBoundingBox?.height,
            width: directionType[direction]?.width(tabBoundingBox),
            transform: directionType[direction]?.transform(
                tabBoundingBox,
                wrapperBoundingBox
            ),
        };

    return (
        <TabsContext.Provider value={{ repositionHighlight, resetHighlight }}>
            <ul
                ref={wrapperRef}
                className={cn(
                    'relative',
                    directionType[direction]?.container,
                    className
                )}
                onMouseLeave={resetHighlight}
            >
                <motion.li
                    ref={highlightRef}
                    transition={{ duration: isHoveredFromNull ? 0 : 0.2 }}
                    animate={{
                        ...highlightAnimate,
                        opacity: highlightedTab ? 1 : 0,
                        transitionDuration: isHoveredFromNull ? 0 : '20ms',
                        transitionProperty: 'width transform opacity',
                    }}
                    className="absolute left-0 top-0 rounded-md bg-zinc-200 dark:bg-zinc-800/60"
                />

                {children}
            </ul>
        </TabsContext.Provider>
    );
}
