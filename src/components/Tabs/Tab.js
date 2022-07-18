import { useContext } from 'react';
import PropTypes from 'prop-types';

import { TabsContext } from './Tabs';

export default function Tab(props) {
  const { children, value } = props;
  const { repositionHighlight } = useContext(TabsContext);

  return (
    <li className="relative" onMouseEnter={(ev) => repositionHighlight(ev, value)}>
      {children}
    </li>
  );
}

Tab.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any,
};
