import { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import { TabsContext } from './Tabs';

export default function Tab(props) {
  const { name, selected = 0, index, children, onClick, onMouseEnter } = props;

  const { repositionHighlight } = useContext(TabsContext);
  const tabRef = useRef(null);

  const tabItemIndex = index ? `tab-item-${index}` : name;

  const handleClick = (e) => {
    onClick?.(e);
  };

  const handleMouseEnter = (e) => {
    repositionHighlight(e.target.getBoundingClientRect(), name);
    onMouseEnter?.(e);
  };

  useEffect(() => {
    const tabNode = tabRef.current;
    const getTabItem = document.getElementById(tabItemIndex);
    if (selected === index && tabNode) {
      getTabItem.scrollIntoView({ behavior: 'smooth', block: 'end' });
      repositionHighlight(tabNode.getBoundingClientRect(), name);
    }
  }, [selected, index, name, tabItemIndex]);

  return (
    <li
      ref={tabRef}
      id={tabItemIndex}
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {children}
    </li>
  );
}

Tab.propTypes = {
  name: PropTypes.any,
  selected: PropTypes.number,
  index: PropTypes.number,
  children: PropTypes.node,
};
