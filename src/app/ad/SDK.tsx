'use client';

import Script from 'next/script';

const SDK = () => {

    const loadGoogleTagService = () => {
        (window as any).googletag = (window as any).googletag || { cmd: [] };

        const googletag = (window as any).googletag;

        googletag.cmd.push(function () {
            googletag
                .defineSlot('/23212980789/brand_unit', [386, 521], 'listing_square')
                .setTargeting('keywords', ['關鍵字1', '關鍵字2'])
                .addService(googletag.pubads());
            googletag
                .defineSlot('/23212980789/brand_unit', [386, 356], 'brand_square')
                .setTargeting('keywords', ['關鍵字1', '關鍵字2'])
                .addService(googletag.pubads());

            googletag
                .defineSlot('/23212980789/brand_unit', [726, 150], 'brand_rectangle')
                .setTargeting('keywords', ['關鍵字1', '關鍵字2'])
                .addService(googletag.pubads());

            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            googletag.pubads().refresh();
        });
    };

    return (
        <>
            <Script
                async
                src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
                strategy="afterInteractive"
                onLoad={loadGoogleTagService}
            ></Script>
        </>
    );
};

export default SDK;
