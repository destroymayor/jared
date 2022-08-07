import { useEffect, useContext, useRef } from 'react';

import { TabsContext } from './Tabs';

export default function Tab(props) {
  const { name, selected = 0, index, children, onClick, onMouseEnter } = props;

  const { repositionHighlight } = useContext(TabsContext);
  const tabRef = useRef(null);

  const handleClick = (e) => {
    onClick?.(e);
  };

  const handleMouseEnter = (e) => {
    repositionHighlight(e.target.getBoundingClientRect(), name);
    onMouseEnter?.(e);
  };

  useEffect(() => {
    const tabNode = tabRef.current;
    if (selected === index && tabNode) {
      repositionHighlight(tabNode.getBoundingClientRect(), name);
    }
  }, [selected, index, name]);

  return (
    <li
      {...props}
      ref={tabRef}
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {children}
    </li>
  );
}
