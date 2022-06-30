import { useState, useRef, Children } from 'react';

import { motion } from 'framer-motion';
import clsx from 'clsx';

import { directionType } from './constants';
import Tab from './Tab';

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
    <ul
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

      {Children.map(children, (child) => (
        <li className="relative" onMouseOver={(ev) => repositionHighlight(ev, child)}>
          {child}
        </li>
      ))}
    </ul>
  );
}

Tabs.Tab = Tab;
