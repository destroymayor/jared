'use client';

import { useEffect, useState } from 'react';
import AdComponent from './AdComponent';

import SDK from './SDK';

export default function Page() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <>
            <SDK />
            <div className="flex w-[480px] flex-col gap-6">
                <AdComponent hasMounted={hasMounted} adId="brand_square" />
                <AdComponent hasMounted={hasMounted} adId="brand_rectangle" />
                <AdComponent hasMounted={hasMounted} adId="listing_square" />
            </div>
        </>
    );
}
