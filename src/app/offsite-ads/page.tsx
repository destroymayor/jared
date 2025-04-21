'use client';

import { Button } from '@/components/ui/button';
import AllAds from './AllAds';
import useGAM from './useGAM';

export default function OffsiteAdsPage() {
     const { refreshAds } = useGAM();

     return (
         <div className="w-full">
             <div className="flex flex-col items-center bg-secondary-40 p-4">
                 <h1 className="text-xl font-bold text-neutral-000">
                     Offsite Ads Test
                 </h1>
                 <div className="flex items-center justify-center py-4 gap-4">
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
