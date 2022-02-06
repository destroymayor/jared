import { useState, useRef } from 'react';

export default function Tabs(props) {
  const { data = [], children } = props;

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
    <div ref={wrapperRef} className="relative" onMouseLeave={resetHighlight}>
      <div
        ref={highlightRef}
        className="absolute left-0 -top-1 rounded-md bg-gray-300 py-4 duration-150 dark:bg-gray-600"
        style={{ ...highlightStyles, transitionProperty: 'width, transform, opacity' }}
      />
      {data.map((item, index) => (
        <div
          className="relative inline-block"
          key={`${index}`}
          onMouseOver={(ev) => repositionHighlight(ev, item)}
          onFocus={() => {}}
        >
          {children({ item })}
        </div>
      ))}
    </div>
  );
}
