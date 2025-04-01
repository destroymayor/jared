'use client';

import ProductCard from '@/components/offsite-ads/components/product-card';
import { PinkoiLogoWithDesc } from '@/components/offsite-ads/components/logo';

export const ListingAdsVertical = () => {
    return (
        <div className="flex flex-col items-center rounded-xs border border-zinc-200 p-1">
            <div className="grid grid-cols-2 gap-4">
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
                />{' '}
                <ProductCard
                    image="https://picsum.photos/405"
                    badge={{ text: '免運', type: 'free-shipping' }}
                    rating={{ score: 4.5, total: 112 }}
                />
            </div>
            <div className="py-2 text-center text-xl text-zinc-500">
                <PinkoiLogoWithDesc />
            </div>
        </div>
    );}

