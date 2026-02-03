import { useUnsplashPhotos } from '@/hooks/queries/use-unsplash-queries';

export function usePhotosViewModel() {
    const { isLoading, data: photos = [] } = useUnsplashPhotos();

    return { isLoading, photos };
}
