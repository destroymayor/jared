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


            googletag.pubads().addEventListener('slotRenderEnded', (event: any) => {
                const slotId = event.slot.getSlotElementId();
                const slotContainer = document.getElementById(slotId);
                const safeframe = slotContainer?.querySelector(
                    'iframe[id^="google_ads_iframe"]'
                ) as HTMLIFrameElement;

                safeframe.onload = () => {
                    safeframe?.contentWindow?.postMessage(
                        {
                            type: 'pinkoi-gam-config',
                        },
                        '*'
                    );
                };
            });

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


{/* <h4 style="font-size:18px; font-weight: bold; text-align:left; margin-bottom:20px;">探索更多在 Pinkoi 平台上相關的商品</h4>
<ins
 data-pinkoi-zine-promoted-client="data-pinkoi-zine-promoted"
 data-pinkoi-zine-promoted-type="listing_rectangle"
 data-pinkoi-zine-promoted-section="post_bottom"
/> */}
