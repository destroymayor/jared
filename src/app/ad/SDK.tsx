'use client';

import Script from 'next/script';

const safeFrameConfig = {
    allowOverlayExpansion: true,
    allowPushExpansion: true,
};

const viewId = String(Date.now());

const SLOT_FIXED_LIST = [
    {
        unit: '/23212980789/brand_unit',
        class: 'post-bottom-container',
        size: [620, 238],
    },
    {
        unit: '/23212980789/brand_unit',
        class: 'below-search-container',
        size: [386, 521],
    },
    {
        unit: '/23212980789/brand_unit',
        class: 'panel-top-container',
        size: [386, 356],
    },
    {
        unit: '/23212980789/brand_unit',
        class: 'post-inside-container',
        size: [726, 150],
    },
];

const SDK = () => {

    const loadGoogleTagService = () => {
        (window as any).googletag = (window as any).googletag || { cmd: [] };

        const googletag = (window as any).googletag;

        googletag.cmd.push(function () {
            googletag.pubads().setForceSafeFrame(true);

            SLOT_FIXED_LIST.forEach((slot) => {
                const containers = document.getElementsByClassName(slot.class);
                Array.from(containers).forEach((container, containerIndex) => {
                    const uniqueId = slot.class + '-' + containerIndex;
                    container.id = uniqueId;

                    googletag
                        .defineSlot(slot.unit, slot.size, uniqueId)
                        .setForceSafeFrame(true)
                        .addService(googletag.pubads());
                });
            });

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
                            selector: 'ins[data-pinkoi-gam-client="data-pinkoi-gam"]',
                            viewId,
                            containerId: slotId,
                            href: window.location.href,
                            mb: '20250114r9HXY6C5Zh',
                        },
                        '*'
                    );
                };

                window.addEventListener('message', function (event) {
                    if (
                        event.data.type === 'pinkoi-gam-layout-change' &&
                        event.data.container_id === slotId
                    ) {
                        safeframe.style.display = 'block';
                        safeframe.style.width = '100%';
                        safeframe.style.height = `${event.data.dimension.height}px`;
                        safeframe.height = `${event.data.dimension.height}px`;

                        slotContainer.children[0].style.width = '100%';
                        slotContainer.children[0].style.height = `${event.data.dimension.height}px`;
                    }
                });

                event.slot.setSafeFrameConfig(safeFrameConfig);
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
