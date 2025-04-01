'use client';

import ProductCard from '@/components/offsite-ads/components/product-card';
import ShopInfo from '@/components/offsite-ads/components/shop-info';
import { PinkoiLogo } from '@/components/offsite-ads/components/logo';

export const ListingAdsHorizontalDWeb = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="grid grid-cols-5 gap-1 rounded-xs border border-zinc-200 bg-white p-1">
                <ProductCard
                    image="https://picsum.photos/400"
                    badge={{ text: '免運', type: 'free-shipping' }}
                    rating={{ score: 4.9, total: 3689 }}
                />
                <ProductCard
                    image="https://picsum.photos/401"
                    badge={{ text: '9 折', type: 'discount' }}
                    rating={{ score: 5.0, total: 123 }}
                />
                <ProductCard
                    image="https://picsum.photos/402"
                    badge={{ text: '9 折', type: 'discount' }}
                />
                <ProductCard
                    image="https://picsum.photos/403"
                    rating={{ score: 4.2, total: 3 }}
                />
                <ProductCard
                    image="https://picsum.photos/404"
                    badge={{ text: '免運', type: 'free-shipping' }}
                    rating={{ score: 4.5, total: 112 }}
                />
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
                <PinkoiLogo /> <span>用好設計實踐自己對生活的想像</span>
            </div>
        </div>
    );
};

export const ListingAdsHorizontalMWeb = () => {
    return (
        <ShopInfo className="rounded-xs border border-zinc-200">
            <ShopInfo.Image
                src="https://picsum.photos/400"
                alt="商品圖片"
                className="w-[100px]"
            />
            <div className="flex flex-col items-start gap-1 px-2">
                <ShopInfo.Title>Verna Select</ShopInfo.Title>
                <ShopInfo.Rating rating={4.5} total={3689} />
                <ShopInfo.Action>前往了解</ShopInfo.Action>
            </div>
        </ShopInfo>
    );
};
