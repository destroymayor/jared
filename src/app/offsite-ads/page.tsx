'use client';

import { cn } from '@/lib/utils';

import { ListingAdsHorizontalDWeb, ListingAdsHorizontalMWeb, ListingAdsVertical, ListingAdsSquare } from '@/components/offsite-ads/listing-ads';
import { BrandAdsHorizontal, BrandAdsVertical, BrandAdsSquare } from '@/components/offsite-ads/brand-ads';

export default function OffsiteAdsPage() {
    return (
        <div
            className={cn(
                'flex flex-col gap-4 bg-white p-4',
                'relative right-1/2 left-1/2',
                'w-[97vw] md:w-[98vw]',
                '-mr-[50vw] -ml-[49vw] pt-4 sm:px-2'
            )}
        >
            <h2 className="text-2xl font-bold text-black">LA 橫式(Dweb)</h2>
            <div className="h-[250px] w-[70vw]">
                <ListingAdsHorizontalDWeb />
            </div>

            <h2 className="pt-4 text-2xl font-bold text-black">LA 橫式(Mweb)</h2>
            <div className="h-[100px] w-[320px]">
                <ListingAdsHorizontalMWeb />
            </div>

            <h2 className="pt-4 text-2xl font-bold text-black">BA 橫式</h2>
            <div className="h-[250px] w-[70vw]">
                <BrandAdsHorizontal />
            </div>

            <div className="flex items-center gap-10">
                <div>
                    <h2 className="pt-2 text-2xl font-bold text-black">LA 方形</h2>
                    <div className="h-[250px] w-[300px]">
                        <ListingAdsSquare
                            badge={{ text: '免運', type: 'free-shipping' }}
                            images={[
                                'https://picsum.photos/400',
                                'https://picsum.photos/401',
                                'https://picsum.photos/402',
                            ]}
                        />
                    </div>
                </div>

                <div>
                    <h2 className="pt-2 text-2xl font-bold text-black">BA 方形</h2>
                    <div className="h-[250px] w-[300px]">
                        <BrandAdsSquare
                            images={[
                                'https://picsum.photos/400',
                                'https://picsum.photos/401',
                                'https://picsum.photos/402',
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-10">
                <div>
                    <h2 className="pt-2 text-2xl font-bold text-black">LA 直式</h2>
                    <div className="h-[600px] w-[300px]">
                        <ListingAdsVertical />
                    </div>
                </div>

                <div>
                    <h2 className="pt-2 text-2xl font-bold text-black">BA 直式</h2>
                    <div className="h-[600px] w-[300px]">
                        <BrandAdsVertical />
                    </div>
                </div>
            </div>
        </div>
    );
}
