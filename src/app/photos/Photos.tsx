'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { AnimateSection } from '@/components/Animate';

import useUnsplashPhotos from './useUnsplashPhotos';
import Skeleton from './Skeleton';

const Photos = () => {
    const { data } = useUnsplashPhotos();

    return (
        <div className="relative left-1/2 right-1/2 -ml-[49vw] -mr-[50vw] grid min-h-screen w-[97vw] gap-2 pt-4 [grid-template-columns:repeat(auto-fill,minmax(100%,1fr))] sm:px-2 sm:[grid-template-columns:repeat(auto-fill,minmax(440px,1fr))] md:w-[98vw]">
            {data?.map((photo) => {
                return (
                    <AnimateSection
                        key={photo.id}
                        className="group relative h-[700px] min-w-full sm:min-w-[440px]"
                    >
                        <Image
                            id={photo.id}
                            alt={photo.id}
                            src={photo.urls.regular}
                            unoptimized
                            className="h-full w-full rounded-md object-cover object-center"
                            width={1080}
                            height={400}
                        />
                    </AnimateSection>
                );
            })}
        </div>
    );
};

const Wrapper = () => (
    <Suspense fallback={<Skeleton />}>
        <Photos />
    </Suspense>
);

export default Wrapper;
