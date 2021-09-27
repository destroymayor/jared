import routes from '@/data/routes';

import DesktopNav from '@/components/Layout/Navigation/DesktopNav';
import MobileNav from '@/components/Layout/Navigation/MobileNavigation';

const Navigation = () => (
  <>
    <MobileNav routes={routes} />
    <DesktopNav routes={routes} />
  </>
);

export default Navigation;
