'use client';

import GridCarousel from '../components/grid-carousel';
import ShopInfo from '../components/shop-info';

interface BrandAdsSquareProps {
    images: string[];
    badge?: {
        text: string;
        type: 'free-shipping' | 'discount';
    };
}

export const BrandAdsSquare = (props: BrandAdsSquareProps) => {
    const { images, badge } = props;

    return (
        <div className="border border-zinc-200">
            <GridCarousel images={images} badge={badge} />

            <div className="flex items-center justify-between gap-1 p-2">
                <div className="flex items-center gap-3 min-w-0">
                    <ShopInfo.Image
                        src="https://picsum.photos/400"
                        alt="商品圖片"
                        className="w-[30px]"
                    />
                    <ShopInfo.Title>Verna Select123</ShopInfo.Title>
                    <ShopInfo.Rating rating={4.5} />
                </div>
                <ShopInfo.Action>前往了解</ShopInfo.Action>
            </div>
        </div>
    );
};

export default BrandAdsSquare;
