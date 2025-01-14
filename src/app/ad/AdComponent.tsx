'use client';

import { cn } from '@/lib/utils';

const AdComponent: React.FC<{
    adId?: string;
    className?: string;
}> = (props) => {
    const { adId, className } = props;

    return (
        <div id={adId} className={cn(' bg-red-200 text-black', className)}>
        </div>
    );
};

export default AdComponent;
