import { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import { TabsContext } from './Tabs';

export default function Tab(props) {
  const { name, selected, index, icon, children } = props;
  const { repositionHighlight, resetHighlight } = useContext(TabsContext);
  const tabRef = useRef(null);
  const getTabIndex = `tab-index-${index}`;

  const handleMouseEnter = (e) => {
    repositionHighlight(e.target.getBoundingClientRect(), name);
  };

  const handleMouseLeave = () => {
    if (!selected) resetHighlight();
  };

  useEffect(() => {
    const tabNode = tabRef.current;
    if (selected && tabNode) {
      document.getElementById(getTabIndex).scrollIntoView({ behavior: 'smooth', block: 'end' });
      repositionHighlight(tabNode.getBoundingClientRect(), name);
    }
  }, [getTabIndex, name, selected]);

  return (
    <li
      {...props}
      ref={tabRef}
      id={getTabIndex}
      role="option"
      aria-selected={selected}
      className="relative flex cursor-pointer items-center justify-start gap-1 p-2 text-zinc-600 transition-colors duration-200 ease-in-out hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && (
        <div className="pointer-events-none mr-2 flex h-5 w-5 items-center justify-center">
          {icon}
        </div>
      )}

      <span className="pointer-events-none">{children}</span>
    </li>
  );
}

Tab.propTypes = {
  name: PropTypes.any,
  selected: PropTypes.bool,
  index: PropTypes.number,
  icon: PropTypes.node,
  children: PropTypes.node,
};
