import { useState, useRef } from 'react';

import Link from '@/components/Common/Link';

const Tabs = (props) => {
  const { data = [] } = props;

  const [tabBoundingBox, setTabBoundingBox] = useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [highlightedTab, setHighlightedTab] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  const highlightRef = useRef(null);
  const wrapperRef = useRef(null);

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles = {};
  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms';
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translateX(${tabBoundingBox?.left - wrapperBoundingBox?.left}px)`;
  }

  return (
    <div className={`relative`} ref={wrapperRef} onMouseLeave={resetHighlight}>
      <div
        className={`
        absolute
        left-0
        top-1
        py-4
        duration-150
        bg-gray-300
        rounded-md
        dark:bg-gray-600
        `}
        ref={highlightRef}
        style={{
          ...highlightStyles,
          transitionProperty: 'width, transform, opacity',
        }}
      />
      {data.map((tab) => (
        <Link
          key={tab?.title}
          className={`
          relative
          inline-block
          p-2
          text-gray-700
          transition
          duration-100
          cursor-pointer
          dark:text-gray-300
          hover:text-gray-700
          dark:hover:text-gray-300
          `}
          href={tab?.pathname}
          aria-label={tab.title}
          onMouseOver={(ev) => repositionHighlight(ev, tab)}
        >
          {tab?.title}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
