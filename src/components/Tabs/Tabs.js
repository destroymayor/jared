import { useState, useRef, createContext } from 'react';

import { motion } from 'framer-motion';
import clsx from 'clsx';

import { directionType } from './constants';
import Tab from './Tab';

Tabs.Tab = Tab;

export const TabsContext = createContext();

export default function Tabs(props) {
  const { children, direction = 'horizontal', className } = props;

  const highlightRef = useRef(null);
  const wrapperRef = useRef(null);

  const [tabBoundingBox, setTabBoundingBox] = useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [highlightedTab, setHighlightedTab] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightAnimate = tabBoundingBox && {
    height: tabBoundingBox?.height,
    width: directionType?.[direction]?.width(tabBoundingBox),
    transform: directionType?.[direction]?.transform(tabBoundingBox, wrapperBoundingBox),
  };

  return (
    <TabsContext.Provider value={{ repositionHighlight, resetHighlight }}>
      <ul
        {...props}
        ref={wrapperRef}
        className={clsx('relative', directionType?.[direction]?.container, className)}
        onMouseLeave={resetHighlight}
      >
        <motion.div
          ref={highlightRef}
          transition={{ duration: isHoveredFromNull ? 0 : 0.2 }}
          animate={{
            ...highlightAnimate,
            opacity: highlightedTab ? 1 : 0,
            transitionDuration: isHoveredFromNull ? 0 : '50ms',
            transitionProperty: 'width transform opacity',
          }}
          className="absolute rounded-md bg-zinc-300 py-4 dark:bg-zinc-800"
        />

        {children}
      </ul>
    </TabsContext.Provider>
  );
}
