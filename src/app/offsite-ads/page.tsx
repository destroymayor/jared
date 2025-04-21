'use client';

import { Button } from '@/components/ui/button';
import AllAds from './AllAds';
import useGAM from './useGAM';

export default function OffsiteAdsPage() {
     const { refreshAds } = useGAM();

     return (
         <div className="g-w-full">
             <div className="g-flex g-flex-col g-items-center g-bg-color-secondary-040 g-p-spacing-l">
                 <h1 className="g-text-font-size-xl g-text-font-weight-bold g-text-color-neutral-000">
                     Offsite Ads Test
                 </h1>
                 <div className="g-flex g-items-center g-justify-center g-pt-spacing-l">
                     <Button size="sm" onClick={() => refreshAds()}>
                         Refresh Ads
                     </Button>
                     <Button size="sm" onClick={() => window.googletag.openConsole()}>
                         GAM Console
                     </Button>
                 </div>
             </div>

             <AllAds />
         </div>
     );
}
