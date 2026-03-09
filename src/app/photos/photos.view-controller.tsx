'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { AnimatedImage } from '@/components/ui/image-gallery';

import { bind } from '@/utils/bind';
import { usePhotosViewModel } from './photos.view-model';

type Props = ReturnType<typeof usePhotosViewModel>;

const NUM_COLUMNS = 3;

export function PhotosViewController({ isLoading, photos }: Props) {
    if (isLoading) {
        return (
            <div className="mx-auto grid w-full max-w-5xl items-start gap-3 px-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: NUM_COLUMNS }).map((_, col) => (
                    <div key={col} className="grid gap-3">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Skeleton key={i} className="h-[300px] w-full rounded-lg" />
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    const columns = Array.from({ length: NUM_COLUMNS }, (_, col) =>
        photos.filter((_, i) => i % NUM_COLUMNS === col)
    );

    return (
        <div className="mx-auto grid w-full max-w-5xl items-start gap-3 px-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
            {columns.map((col, colIdx) => (
                <div key={colIdx} className="grid gap-3">
                    {col.map((photo) => {
                        const ratio = photo.width / photo.height;

                        return (
                            <a
                                key={photo.id}
                                href={photo.links.html}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <AnimatedImage
                                    src={photo.urls.regular}
                                    alt={photo.alt_description}
                                    ratio={ratio}
                                >
                                    <div className="absolute inset-0 hidden bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block" />
                                    <div className="absolute right-4 bottom-4 left-4 z-10 hidden text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
                                        <p className="line-clamp-2">
                                            {photo.alt_description}
                                        </p>
                                    </div>
                                </AnimatedImage>
                            </a>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export const PhotosBound = bind(PhotosViewController, usePhotosViewModel);
