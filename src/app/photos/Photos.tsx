'use client';

import Image from 'next/image';
import { AnimateSection } from '@/components/Animate';
import { cn } from '@/lib/utils';

import useUnsplashPhotos from './useUnsplashPhotos';
import Skeleton from './Skeleton';

const Photos = () => {
    const { data, isLoading } = useUnsplashPhotos();

    if (isLoading) {
        return <Skeleton />;
    }

    return (
        <div
            className={cn(
                'relative left-1/2 right-1/2',
                'w-[97vw] md:w-[98vw]',
                '-ml-[49vw] -mr-[50vw] pt-4 sm:px-2',
                'grid min-h-screen gap-2 [grid-template-columns:repeat(auto-fill,minmax(100%,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(440px,1fr))]'
            )}
        >
            {data?.map((photo) => {
                return (
                    <AnimateSection
                        key={photo.id}
                        className="relative h-[700px] min-w-full sm:min-w-[440px]"
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

export default Photos;
