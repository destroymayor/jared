'use client';

import ProductCard from '@/components/offsite-ads/components/product-card';
import ShopInfo from '@/components/offsite-ads/components/shop-info';
import { PinkoiLogo } from '@/components/offsite-ads/components/logo';

export const BrandAdsHorizontal = () => {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-6 rounded-xs border border-zinc-200 p-1">
                <div className="grid flex-1 grid-cols-3 items-center gap-2">
                    <ProductCard image="https://picsum.photos/400" />
                    <ProductCard image="https://picsum.photos/401" />
                    <ProductCard image="https://picsum.photos/402" />
                </div>
                <ShopInfo className="flex-[0.6]">
                    <ShopInfo.Image
                        src="https://picsum.photos/400"
                        alt="商品圖片"
                        className="w-[100px]"
                    />
                    <div className="flex flex-col items-start gap-1">
                        <ShopInfo.Title>Verna Select</ShopInfo.Title>
                        <ShopInfo.Rating rating={4.5} total={3689} />
                        <ShopInfo.Action>前往了解</ShopInfo.Action>
                    </div>
                </ShopInfo>
            </div>
            <div className="flex items-center gap-2 text-left text-sm text-zinc-500">
                <PinkoiLogo /> <span>用好設計實踐自己對生活的想像</span>
            </div>
        </div>
    );
};
