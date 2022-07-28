import { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import { TabsContext } from './Tabs';

export default function Tab(props) {
  const { name, selected = 0, index, children, onClick } = props;

  const { repositionHighlight } = useContext(TabsContext);
  const tabRef = useRef(null);

  const tabItemIndex = index ? `tab-item-${index}` : name;

  const handleMouseEnter = (e) => {
    repositionHighlight(e.target.getBoundingClientRect(), name);
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
      onClick={onClick}
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
