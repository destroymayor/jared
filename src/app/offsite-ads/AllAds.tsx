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
            className="flex flex-col gap-20 max-w-[1200px]"
        >
            <div className="max-w-[1200px]">
                <h2 className="text-xl pb-spacing-s">970x250</h2>
                <AdSlot
                    className={slots.listing_horizontal.class}
                    height={250}
                    width={970}
                />
            </div>
            <div className="flex gap-40">
                <div>
                    <h2 className="text-xl pb-spacing-s">600x300</h2>
                    <AdSlot
                        className={slots.brand_vertical.class}
                        height={600}
                        width={300}
                    />
                </div>
                <div className="flex flex-col" style={{ gap: 20 }}>
                    <div>
                        <h2 className="text-xl pb-spacing-s">250x300</h2>
                        <AdSlot
                            className={slots.listing_square.class}
                            height={250}
                            width={300}
                        />
                    </div>
                    <div>
                        <h2 className="text-xl pb-spacing-s">320x100</h2>
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
