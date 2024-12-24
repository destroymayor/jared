'use client';

import Script from 'next/script';

const safeFrameConfig = {
    allowOverlayExpansion: true,
    allowPushExpansion: true,
};

const SLOT_LIST = [
    {
        unit: '/23212980789/listing_rectangle_unit',
        id: 'listing-0',
        className: 'listing-container',
        size: [620, 238],
    },
    {
        unit: '/23212980789/brand_unit',
        id: 'brand-square-0',
        className: 'brand-square-container',
        size: [386, 356],
    },
    {
        unit: '/23212980789/brand_unit',
        id: 'brand-rectangle-0',
        className: 'brand-rectangle-container',
        size: [726, 150],
    },
    {
        unit: '/23212980789/brand_unit',
        id: 'brand-rectangle-1',
        className: 'brand-rectangle-container',
        size: [726, 150],
    },
    {
        unit: '/23212980789/brand_unit',
        id: 'brand-rectangle-2',
        className: 'brand-rectangle-container',
        size: [726, 150],
    },
    {
        unit: '/23212980789/brand_unit',
        id: 'brand-rectangle-3',
        className: 'brand-rectangle-container',
        size: [726, 150],
    },
];

const SDK = (props: { onCompleted: () => void }) => {
    const { onCompleted } = props;

    const loadGoogleTagService = () => {
        (window as any).googletag = (window as any).googletag || { cmd: [] };

        const googletag = (window as any).googletag;

        googletag.cmd.push(function () {
            googletag.pubads().setForceSafeFrame(true);

            SLOT_LIST.forEach(function (slotItem, slotItemIndex) {
                googletag
                    .defineSlot(slotItem.unit, slotItem.size, slotItem.id)
                    .addService(googletag.pubads());
            });

            googletag.pubads().addEventListener('slotRenderEnded', (event: any) => {
                const slotId = event.slot.getSlotElementId();
                const slotContainer = document.getElementById(slotId);
                const safeframe = slotContainer?.querySelector(
                    'iframe[id^="google_ads_iframe"]'
                );

                if (safeframe && slotContainer) {
                    slotContainer.children[0].style.width = '100%';
                    safeframe.width = '100%';
                }

                event.slot.setSafeFrameConfig(safeFrameConfig);
            });

            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });

        onCompleted();
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
