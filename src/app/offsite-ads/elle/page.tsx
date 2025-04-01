'use client';

import { cn } from '@/lib/utils';
import {
    ListingAdsHorizontalDWeb,
    ListingAdsVertical,
    ListingAdsSquare
} from '@/components/offsite-ads/listing-ads';

import { BrandAdsVertical,  } from '@/components/offsite-ads/brand-ads';

export default function EllePage() {
    return (
        <div
            className={cn(
                'flex flex-col bg-white text-black',
                'relative right-1/2 left-1/2',
                'w-[98vw]',
                '-mr-[50vw] -ml-[49vw]',
                'pb-64'
            )}
        >
            <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-2 p-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">ELLE</h1>

                    <div className="flex items-center gap-2 pl-4">
                        <span>時尚潮流</span>
                        <span>美妝保養</span>
                        <span>娛樂名人</span>
                        <span>美食旅遊</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div>電子報</div>
                    <div>ELLE SHOP</div>
                </div>
            </nav>

            <div className="flex items-center justify-center bg-zinc-300 p-4">
                {/* ad slot */}
                <div className="h-[250px] w-[970px]">
                    <ListingAdsHorizontalDWeb />
                </div>
            </div>

            <div className="mx-auto max-w-[1200px] py-10 text-center">
                <div className="py-4 text-sm">時尚 {`>`} 時尚速報</div>
                <div className="py-2 text-5xl font-bold">
                    GUCCI全新展覽《竹境：解譯傳奇》4/1登場！邀來時裝屋工匠親臨製包，7大展區沉浸式探索竹節底蘊
                </div>
                <div className="py-2 text-2xl">
                    解譯GUCCI Bamboo 1947，上海全新展覽資訊、亮點一次看
                </div>
                <div className="pt-2 pb-10 text-sm">
                    By Teresa ChuPublished: 2025/03/29
                </div>

                <div className="relative m-[0_15rem_1rem_8rem]">
                    <div className="w-[40rem] px-[1rem] text-sm">
                        <div className="h-[304px] w-[610px] bg-amber-400"></div>
                        <div className="py-4 text-left">
                            繼去年5月的典藏大展《寰宇古馳》，GUCCI今年再次選址上海，於4月1日-4月6日帶來全新展覽《竹境：解譯傳奇》（Gucci
                            Bamboo: Decoding an
                            Icon）。展覽由米蘭的跨領域策展品牌2050+策劃並設計，透過7個展間，沉浸式讓人一窺竹節包的製作過程、歷史發展與融合AI科技幻化出的未來願景，下滑跟著ELLE搶先一看展覽亮點。
                            【Gucci Know How】Gucci
                            歷史最悠久的經典包包是「它」！三大重點一次認識Bamboo1947
                            竹節包
                        </div>
                    </div>

                    {/* ad slot */}
                    <div className="absolute top-0 -right-[10rem] h-[600px] w-[300px]">
                        <BrandAdsVertical />
                    </div>
                </div>
            </div>

            <div className="px-20 pt-50">
                <div className="text-3xl">《竹境：解譯傳奇》以現代視角重現竹節DNA</div>
                <hr className="mx-auto" />
                <div className="flex gap-4 py-4">
                    <div className="h-[400px] min-w-[400px] bg-amber-400"></div>
                    <div className="w-[60vw]">
                        在沉浸式裝置、歷史解譯與藝術合作的引導下，觀者將踏上一場跨學科的探索之旅，從多個維度欣賞竹的世界，瞭解其在藝術與植物學領域的文化象徵意義，並領略將竹節幻化為迷人珍品的手工技藝。展覽精選了藝術家Sybil
                        Montet、Francesco D’Abbraccio（又名Lorem）、Christian
                        Kondić與陳嫣冉的作品，每位藝術家皆憑藉極富前瞻性的創作圖景，重新演繹這一標誌性設計，將其傳奇延續至未來
                    </div>
                </div>
            </div>

            <div className="py-10">
                <div className="relative mb-6 text-center text-sm">
                    <hr className="text-zinc-300" />
                    <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 bg-white px-1">
                        廣告 - 內文未完請往下捲動
                    </div>
                </div>

                {/* ad slot */}
                <div className="mx-auto h-[250px] w-[970px]">
                    <ListingAdsHorizontalDWeb />
                </div>

                <hr className="mt-6 text-zinc-300" />
            </div>

            <div className="m-20 flex gap-4">
                <div className="h-[300px] min-w-[300px] bg-sky-600"></div>
                <div className="w-[40vw]">
                    <div>跟上時代腳步！竹節包從未停止蛻變</div>
                    <div>
                        這一空間通過跨學科藝術家Francesco
                        D’Abbraccio利用生成式人工智慧創作的影片裝置，展望GUCCI Bamboo
                        1947系列竹節包款的未來前景。在持續變化的進程中，竹節包款通過流動的形態序列不斷蛻變，而其標誌性竹節手柄則始終如一。
                    </div>
                </div>

                <div>
                    {/* ad slot */}
                    <div className="h-[250px] w-[300px]">
                        <ListingAdsSquare
                            images={[
                                'https://picsum.photos/400',
                                'https://picsum.photos/401',
                                'https://picsum.photos/402',
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div className="mx-20 flex gap-4">
                <div className="h-[300px] min-w-[300px] bg-sky-600"></div>
                <div className="w-[40vw]">
                    <div>跟上時代腳步！竹節包從未停止蛻變</div>
                    <div>
                        這一空間通過跨學科藝術家Francesco
                        D’Abbraccio利用生成式人工智慧創作的影片裝置，展望GUCCI Bamboo
                        1947系列竹節包款的未來前景。在持續變化的進程中，竹節包款通過流動的形態序列不斷蛻變，而其標誌性竹節手柄則始終如一。
                    </div>
                </div>

                <div>
                    {/* ad slot */}
                    <div className="h-[250px] w-[300px]">
                        <ListingAdsSquare
                            images={[
                                'https://picsum.photos/400',
                                'https://picsum.photos/401',
                                'https://picsum.photos/402',
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div className="m-20 flex gap-4">
                <div className="h-[300px] min-w-[300px] bg-sky-600"></div>
                <div className="w-[40vw]">
                    <div>跟上時代腳步！竹節包從未停止蛻變</div>
                    <div>
                        這一空間通過跨學科藝術家Francesco
                        D’Abbraccio利用生成式人工智慧創作的影片裝置，展望GUCCI Bamboo
                        1947系列竹節包款的未來前景。在持續變化的進程中，竹節包款通過流動的形態序列不斷蛻變，而其標誌性竹節手柄則始終如一。
                    </div>
                </div>

                <div>
                    {/* ad slot */}
                    <div className="h-[600px] w-[300px]">
                        <ListingAdsVertical />
                    </div>
                </div>
            </div>
        </div>
    );
}
