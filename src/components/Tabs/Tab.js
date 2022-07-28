import { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { TabsContext } from './Tabs';

export default function Tab(props) {
  const { name, selected = 0, index, icon, children, onClick } = props;

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
      <span className={clsx(icon ? 'flex' : 'hidden', 'mr-2 h-5 w-5 items-center justify-center')}>
        {icon}
      </span>

      <span className="pointer-events-none">{children}</span>
    </li>
  );
}

Tab.propTypes = {
  name: PropTypes.any,
  selected: PropTypes.number,
  index: PropTypes.number,
  icon: PropTypes.node,
  children: PropTypes.node,
};
