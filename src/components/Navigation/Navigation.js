import routes from '@/data/routes';

import DesktopNav from '@/components/Navigation/DesktopNav';
import MobileNav from '@/components/Navigation/MobileNav';

export default function Navigation() {
  return (
    <>
      <MobileNav routes={routes} />
      <DesktopNav routes={routes} />
    </>
  );
}
