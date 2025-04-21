import { useEffect } from 'react';

import AdSlot from './AdSlot';
import useGAM from './useGAM';

const slots = {
    brand_horizontal: {
        class: 'brand_horizontal',
        size: [970, 250],
    },
    brand_square: {
        class: 'brand_square',
        size: [300, 250],
    },
    brand_vertical: {
        class: 'brand_vertical',
        size: [300, 600],
    },
    listing_horizontal: {
        class: 'listing_horizontal',
        size: [970, 250],
    },
    listing_horizontal_small: {
        class: 'listing_horizontal_small',
        size: [320, 100],
    },
    listing_square: {
        class: 'listing_square',
        size: [300, 250],
    },
    listing_vertical: {
        class: 'listing_vertical',
        size: [300, 600],
    },
};

const AllAds = () => {
    const { fetchGAM } = useGAM(Object.values(slots));

    useEffect(() => fetchGAM(), []);

    return (
        <div
            className="g-flex g-flex-col g-pv-spacing-l g-mh-spacing-auto"
            style={{ gap: 40, maxWidth: 1200 }}
        >
            <div className="g-mh-spacing-auto">
                <h2 className="g-text-font-size-xl g-pb-spacing-s">970x250</h2>
                <AdSlot
                    className={slots.listing_horizontal.class}
                    height={250}
                    width={970}
                />
            </div>
            <div className="g-flex g-mh-spacing-auto" style={{ gap: 100 }}>
                <div>
                    <h2 className="g-text-font-size-xl g-pb-spacing-s">600x300</h2>
                    <AdSlot
                        className={slots.brand_vertical.class}
                        height={600}
                        width={300}
                    />
                </div>
                <div className="g-flex g-flex-col" style={{ gap: 20 }}>
                    <div>
                        <h2 className="g-text-font-size-xl g-pb-spacing-s">250x300</h2>
                        <AdSlot
                            className={slots.listing_square.class}
                            height={250}
                            width={300}
                        />
                    </div>
                    <div>
                        <h2 className="g-text-font-size-xl g-pb-spacing-s">320x100</h2>
                        <AdSlot
                            className={slots.listing_horizontal_small.class}
                            height={100}
                            width={320}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllAds;
