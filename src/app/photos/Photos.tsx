'use client';

import { cn } from '@/lib/utils';

import { Skeleton } from '@/components/ui/skeleton';
import useUnsplashPhotos from './useUnsplashPhotos';
import BlurredImage from './BlurredImage';

const Photos = () => {
    const { isLoading, data: photos = [] } = useUnsplashPhotos();

    if (isLoading) {
        return (
            <div
                className={cn(
                    'columns-1 gap-4 p-4 sm:columns-2 lg:columns-3 2xl:columns-4'
                )}
            >
                {[...Array(10)].map((_, idx) => (
                    <Skeleton key={idx} className="mb-4 h-[400px] w-full rounded-lg" />
                ))}
            </div>
        );
    }

    return (
        <div
            className={cn('columns-1 gap-4 p-4 sm:columns-2 lg:columns-3 2xl:columns-4')}
        >
            {photos?.map((photo, idx) => (
                <a
                    key={photo.id}
                    className="group relative cursor-pointer"
                    href={photo.links.html}
                    target="_blank"
                >
                    <div
                        className={cn(
                            'absolute inset-0 hidden rounded-lg bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block'
                        )}
                    />
                    <BlurredImage
                        src={photo.urls.regular}
                        alt={photo.alt_description}
                        className="mb-4 size-full rounded-lg object-contain"
                        style={{ objectFit: 'contain' }}
                        width={200}
                        height={200}
                    />
                    <div
                        className={cn(
                            'absolute right-4 bottom-4 left-4 z-10 hidden text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block'
                        )}
                    >
                        {photo.alt_description}
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Photos;
