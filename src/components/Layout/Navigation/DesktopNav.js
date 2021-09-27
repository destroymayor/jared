import { memo } from 'react';

import ThemeToggle from '@/components/Layout/ThemeToggle';

import Tabs from '@/components/Common/Tabs';

const DesktopNav = (props) => {
  const { routes = [] } = props;

  return (
    <div className="items-center hidden h-10  sm:flex">
      <Tabs data={routes} />

      <div className="flex flex-col justify-center mx-2">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default memo(DesktopNav);
