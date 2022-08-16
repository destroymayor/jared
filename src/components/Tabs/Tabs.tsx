import React from 'react';

import { motion } from 'framer-motion';
import clsx from 'clsx';

import { directionType } from './constants';

interface ITabs {
  direction?: string;
  shouldResetHighlight?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ITabsContext {
  repositionHighlight: () => void;
  resetHighlight: () => void;
}

export const TabsContext = React.createContext<ITabsContext | any>(null);

export default function Tabs(props: ITabs) {
  const { direction = 'horizontal', shouldResetHighlight, className, children } = props;

  const highlightRef = React.useRef<HTMLLIElement | null>(null);
  const wrapperRef = React.useRef<DOMRect | HTMLUListElement | any>(null);

  const [tabBoundingBox, setTabBoundingBox] = React.useState<DOMRect | null>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = React.useState<DOMRect | null>(null);
  const [highlightedTab, setHighlightedTab] = React.useState<DOMRect | null>(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState<Boolean>(true);

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
      transform: directionType[direction]?.transform(tabBoundingBox, wrapperBoundingBox),
    };

  return (
    <TabsContext.Provider value={{ repositionHighlight, resetHighlight }}>
      <ul
        ref={wrapperRef}
        className={clsx('relative', directionType[direction]?.container, className)}
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
          className="absolute top-0 left-0 rounded-md bg-zinc-200 dark:bg-zinc-800/60"
        />

        {children}
      </ul>
    </TabsContext.Provider>
  );
}