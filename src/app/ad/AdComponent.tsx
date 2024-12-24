'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

const AdComponent: React.FC<{
    adId?: string;
    className?: string;
}> = (props) => {
    const { adId, className } = props;

    useEffect(() => {
        const googletag = (window as any).googletag;
        googletag.cmd.push(function () {
            googletag.display(adId);
        });
    }, []);

    return (
        <div id={adId} className={cn('min-h-[150px] bg-red-200 text-black', className)}>
            {adId}
        </div>
    );
};

export default AdComponent;
