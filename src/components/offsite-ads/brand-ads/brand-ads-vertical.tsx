'use client';

import ProductCard from '@/components/offsite-ads/components/product-card';
import ShopInfo from '@/components/offsite-ads/components/shop-info';
import { PinkoiLogoWithDesc } from '@/components/offsite-ads/components/logo';

export const BrandAdsVertical = () => {
    return (
        <div className="flex flex-col gap-2 rounded-xs border border-zinc-200 p-2">
            <ShopInfo>
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
            <div className="grid grid-cols-2 gap-1">
                <ProductCard className="col-span-2" image="https://picsum.photos/400" />
                <ProductCard image="https://picsum.photos/401" />
                <ProductCard image="https://picsum.photos/402" />
            </div>
            <div className="py-2 self-center text-center text-xl text-zinc-500">
                <PinkoiLogoWithDesc />
            </div>
        </div>
    );}

