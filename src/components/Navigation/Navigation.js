import routes, { home, dashboard, projects, snippets } from '@/data/routes';

import DesktopNav from '@/components/Navigation/DesktopNav';
import MobileNav from '@/components/Navigation/MobileNav';

export default function Navigation() {
  const desktopRoutes = [home, dashboard, projects, snippets];

  return (
    <>
      <MobileNav routes={routes} />
      <DesktopNav routes={desktopRoutes} />
    </>
  );
}
