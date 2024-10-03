'use client';

import BlurFade from '@/components/ui/blur-fade';
import { cn } from '@/lib/utils';

import useUnsplashPhotos from './useUnsplashPhotos';
import Skeleton from './Skeleton';

const Photos = () => {
    const { data: photos, isLoading } = useUnsplashPhotos();

    if (isLoading) {
        return <Skeleton />;
    }

    if (!photos) {
        return <div>No photos found</div>;
    }

    return (
        <div
            className={cn(
                'columns-1 gap-4 sm:columns-2 lg:columns-3',
                'relative left-1/2 right-1/2',
                'w-[97vw] md:w-[98vw]',
                '-ml-[49vw] -mr-[50vw] pt-4 sm:px-2'
            )}
        >
            {photos.map((photo, idx) => (
                <BlurFade key={photo.id} delay={0.25 + idx * 0.05} inView>
                    <a
                        className="cursor-pointer"
                        href={photo.links.html}
                        target="_blank"
                    >
                        <img
                            id={photo.id}
                            alt={photo.id}
                            src={photo.urls.regular}
                            className="mb-4 size-full rounded-lg object-contain"
                        />
                    </a>
                </BlurFade>
            ))}
        </div>
    );
};

export default Photos;
