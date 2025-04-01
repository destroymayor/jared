'use client';

import { cn } from '@/lib/utils';
import Badge from './badge';
import useImageCarousel from './useImageCarousel';

interface GridCarouselProps {
    images: string[];
    badge?: {
        text: string;
        type: 'free-shipping' | 'discount';
    };
}

const GridCarousel = (props: GridCarouselProps) => {
    const { images, badge } = props;

    const {
        currentImageIndex,
        previousImageIndex,
        isTransitioning,
        pauseCarousel,
        resumeCarousel,
    } = useImageCarousel({
        images,
        interval: 2000,
        transitionDuration: 100,
    });

    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-1">
            {[0, 1, 2].map((imageIndex) => {
                const firstImageIndex = imageIndex === 0;
                const currentIdx = (currentImageIndex + imageIndex) % images.length;
                const previousIdx = (previousImageIndex + imageIndex) % images.length;

                return (
                    <div
                        key={imageIndex}
                        className={cn(
                            'relative aspect-square w-full overflow-hidden',
                            firstImageIndex && 'col-span-2 row-span-2'
                        )}
                        onMouseEnter={pauseCarousel}
                        onMouseLeave={resumeCarousel}
                    >
                        {badge && firstImageIndex && (
                            <div className="absolute top-0 left-0 z-20">
                                <Badge text={badge.text} type={badge.type} />
                            </div>
                        )}
                        <img
                            key={`current-${images[currentIdx]}`}
                            src={images[currentIdx]}
                            className={cn(
                                'absolute inset-0 object-cover transition-opacity duration-500',
                                isTransitioning ? 'opacity-0' : 'opacity-100'
                            )}
                        />
                        <img
                            key={`previous-${images[previousIdx]}`}
                            src={images[previousIdx]}
                            className={cn(
                                'absolute inset-0 object-cover transition-opacity duration-500',
                                isTransitioning ? 'opacity-100' : 'opacity-0'
                            )}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default GridCarousel;
