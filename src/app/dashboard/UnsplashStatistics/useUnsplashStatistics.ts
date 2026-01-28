import fetcher from '@/lib/fetcher';
import { useQuery } from '@tanstack/react-query';
import { UnsplashStatisticsType } from '@/lib/unsplash';

const API_PATH = '/api/unsplash/statistics';

export default function useUnsplashStatistics() {
    return useQuery({
        queryKey: [API_PATH],
        queryFn: () => fetcher<UnsplashStatisticsType>(API_PATH),
        refetchOnWindowFocus: false,
    });
}
