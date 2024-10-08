import fetcher from '@/lib/fetcher';
import { useQuery } from '@tanstack/react-query';
import { UnsplashStatisticsType } from '@/lib/unsplash';

const API_PATH = '/api/unsplash/statistics';

const useUnsplashStatistics = () => {
    const query = useQuery({
        queryKey: [API_PATH],
        queryFn: async () => {
            const response = await fetcher<UnsplashStatisticsType>(API_PATH);

            return response;
        },
        refetchOnWindowFocus: false,
    });

    return query;
};

export default useUnsplashStatistics;
