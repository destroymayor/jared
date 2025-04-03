'use client';

import { cn } from '@/lib/utils';

import useUnsplashPhotos from './useUnsplashPhotos';
import BlurredImage from './BlurredImage';
const Photos = () => {
    const { data: photos = [] } = useUnsplashPhotos();

    return (
        <div
            className={cn('columns-1 gap-4 p-4 sm:columns-2 lg:columns-3 2xl:columns-4')}
        >
            {photos?.map((photo, idx) => (
                <a
                    key={photo.id}
                    className="cursor-pointer"
                    href={photo.links.html}
                    target="_blank"
                >
                    <BlurredImage
                        src={photo.urls.regular}
                        alt={photo.id}
                        className="mb-4 size-full rounded-lg object-contain"
                        style={{ objectFit: 'contain' }}
                        width={200}
                        height={200}
                    />
                </a>
            ))}
        </div>
    );
};

export default Photos;
