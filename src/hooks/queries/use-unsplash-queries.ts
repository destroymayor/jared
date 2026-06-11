import fetcher from '@/lib/fetcher';
import { useQuery } from '@/lib/react-query';
import { queryKeys } from '@/lib/react-query';
import type { UnsplashPhotoType, UnsplashStatisticsType } from '@/lib/unsplash/types';

export function useUnsplashPhotos() {
    return useQuery({
        queryKey: queryKeys.unsplash.photos,
        queryFn: () => fetcher<UnsplashPhotoType[]>(queryKeys.unsplash.photos[0]),
        refetchOnWindowFocus: false,
    });
}

export function useUnsplashStatistics() {
    return useQuery({
        queryKey: queryKeys.unsplash.statistics,
        queryFn: () => fetcher<UnsplashStatisticsType>(queryKeys.unsplash.statistics[0]),
        refetchOnWindowFocus: false,
    });
}
