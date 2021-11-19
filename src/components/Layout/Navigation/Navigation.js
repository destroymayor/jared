import routes from '@/data/routes';

import DesktopNav from '@/components/Layout/Navigation/DesktopNav';
import MobileNav from '@/components/Layout/Navigation/MobileNav';

export default function Navigation() {
  return (
    <>
      <MobileNav routes={routes} />
      <DesktopNav routes={routes} />
    </>
  );
}
