'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';

const AdComponent: React.FC<{
    hasMounted: boolean;
    adId?: string;
    className?: string;
}> = (props) => {
    const { hasMounted, adId, className } = props;

    useEffect(() => {
        if (hasMounted) {
            window?.googletag?.cmd.push(function () {
                window?.googletag?.display(adId);
            });
        }
    }, [hasMounted]);

    return (
        <div id={adId} className={cn(' ', className)}>
        </div>
    );
};

export default AdComponent;
