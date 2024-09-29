'use client';

import Image from 'next/image';

import BlurFade from '@/components/ui/blur-fade';
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
            {data?.map((photo, photoIndex) => {
                return (
                    <BlurFade
                        key={photo.id}
                        delay={0.25 + photoIndex * 0.05}
                        inView
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
                    </BlurFade>
                );
            })}
        </div>
    );
};

export default Photos;
