'use client';

import { useState } from 'react';

import AdComponent from './AdComponent';

import SDK from './SDK';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <SDK onCompleted={() => setIsLoaded(true)}></SDK>
            {isLoaded && (
                <div className="flex w-[620px] flex-col gap-6">
                    <AdComponent adId="listing-0" />
                    <AdComponent adId="brand-square-0" className="max-w-[386px]" />
                    <AdComponent adId="brand-rectangle-0" />
                    <AdComponent adId="brand-rectangle-1" />
                    <AdComponent adId="brand-rectangle-2" />
                    <AdComponent adId="brand-rectangle-3" />
                </div>
            )}
        </>
    );
}
