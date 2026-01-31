import { httpClient } from '@/lib/http-client';
import { useQuery } from '@/lib/react-query';
import { queryKeys } from '@/lib/react-query';
import type { UnsplashPhotoType, UnsplashStatisticsType } from '@/lib/unsplash/types';

export function useUnsplashPhotos() {
    return useQuery({
        queryKey: queryKeys.unsplash.photos,
        queryFn: () => httpClient<UnsplashPhotoType[]>(queryKeys.unsplash.photos[0]),
        refetchOnWindowFocus: false,
    });
}

export function useUnsplashStatistics() {
    return useQuery({
        queryKey: queryKeys.unsplash.statistics,
        queryFn: () =>
            httpClient<UnsplashStatisticsType>(queryKeys.unsplash.statistics[0]),
        refetchOnWindowFocus: false,
    });
}
