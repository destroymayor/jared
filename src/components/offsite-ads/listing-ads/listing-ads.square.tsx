'use client';

import { PinkoiLogoWithDesc } from '../components/logo';
import GridCarousel from '../components/grid-carousel';

interface ListingAdsSquareProps {
    images: string[];
    badge?: {
        text: string;
        type: 'free-shipping' | 'discount';
    };
}

export const ListingAdsSquare = (props: ListingAdsSquareProps) => {
    const { images, badge } = props;

    return (
        <div className="border border-zinc-200">
            <GridCarousel images={images} badge={badge} />

            <div className="flex items-center justify-center py-2">
                <PinkoiLogoWithDesc />
            </div>
        </div>
    );
};

export default ListingAdsSquare;
