import { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import { TabsContext } from './Tabs';

export default function Tab(props) {
  const { name, selected = 0, index, children, onClick } = props;

  const { repositionHighlight } = useContext(TabsContext);
  const tabRef = useRef(null);

  const handleMouseEnter = (e) => {
    repositionHighlight(e.target.getBoundingClientRect(), name);
  };

  useEffect(() => {
    const tabNode = tabRef.current;
    const getTabItem = document.getElementById(`tab-item-${index}`);
    if (selected === index && tabNode) {
      getTabItem.scrollIntoView({ behavior: 'smooth', block: 'end' });
      repositionHighlight(tabNode.getBoundingClientRect(), name);
    }
  }, [selected, index, name]);

  return (
    <li
      ref={tabRef}
      id={`tab-item-${index}`}
      className="relative flex cursor-pointer items-center justify-start gap-1 p-2 text-zinc-600 transition-colors duration-200 ease-in-out hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-white"
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
