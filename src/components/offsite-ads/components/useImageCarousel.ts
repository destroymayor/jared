import { useState, useEffect } from 'react';

interface UseImageCarouselProps {
    images: string[];
    interval?: number;
    transitionDuration?: number;
}

interface UseImageCarouselReturn {
    currentImageIndex: number;
    previousImageIndex: number;
    isTransitioning: boolean;
    isPaused: boolean;
    pauseCarousel: () => void;
    resumeCarousel: () => void;
}

const useImageCarousel = ({
    images,
    interval = 2000,
    transitionDuration = 100,
}: UseImageCarouselProps): UseImageCarouselReturn => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [previousImageIndex, setPreviousImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isPaused) {
                setIsTransitioning(true);
                setPreviousImageIndex(currentImageIndex);
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setTimeout(() => {
                    setIsTransitioning(false);
                }, transitionDuration);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, isPaused, currentImageIndex, interval, transitionDuration]);

    const pauseCarousel = () => setIsPaused(true);
    const resumeCarousel = () => setIsPaused(false);

    return {
        currentImageIndex,
        previousImageIndex,
        isTransitioning,
        isPaused,
        pauseCarousel,
        resumeCarousel,
    };
}; 

export default useImageCarousel;
