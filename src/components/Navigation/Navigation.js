import routes, { home, dashboard, projects, snippets, bookmarks } from '@/data/routes';

import DesktopNav from '@/components/Navigation/DesktopNav';
import MobileNav from '@/components/Navigation/MobileNav';

export default function Navigation() {
  const desktopRoutes = [home, dashboard, projects, snippets, bookmarks];

  return (
    <>
      <MobileNav routes={routes} />
      <DesktopNav routes={desktopRoutes} />
    </>
  );
}
