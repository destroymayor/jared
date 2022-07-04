import { useContext } from 'react';
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
