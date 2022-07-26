import { useState, useRef, createContext } from 'react';
import PropTypes from 'prop-types';

import { motion } from 'framer-motion';
import clsx from 'clsx';

import { directionType } from './constants';
import Tab from './Tab';

Tabs.Tab = Tab;

export const TabsContext = createContext();

export default function Tabs(props) {
  const { direction = 'horizontal', className, children } = props;

  const highlightRef = useRef(null);
  const wrapperRef = useRef(null);

  const [tabBoundingBox, setTabBoundingBox] = useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [highlightedTab, setHighlightedTab] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  const repositionHighlight = (rect, tab) => {
    setTabBoundingBox(rect);
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightAnimate = tabBoundingBox && {
    width: directionType?.[direction]?.width(tabBoundingBox),
    transform: directionType?.[direction]?.transform(tabBoundingBox, wrapperBoundingBox),
  };

  return (
    <TabsContext.Provider value={{ repositionHighlight, resetHighlight }}>
      <ul
        {...props}
        ref={wrapperRef}
        role="listbox"
        className={clsx('relative', directionType?.[direction]?.container, className)}
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
          className="absolute top-0 left-0 h-10 w-full rounded-md bg-zinc-200 dark:bg-zinc-800/60"
        />

        {children}
      </ul>
    </TabsContext.Provider>
  );
}

Tabs.propTypes = {
  direction: PropTypes.oneOf([directionType.horizontal.type, directionType.vertical.type]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
