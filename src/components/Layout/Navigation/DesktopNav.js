import { memo } from 'react';

import Tabs from '@/components/Layout/Navigation/Tabs';
import ThemeToggle from '@/components/Layout/ThemeToggle';

const DesktopNav = (props) => {
  const { routes = [] } = props;

  return (
    <div className="items-center hidden h-10 sm:flex">
      <Tabs data={routes}></Tabs>

      <div className="flex justify-center mx-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default memo(DesktopNav);
