import fetcher from '@/lib/fetcher';
import { PlaybackState } from '@/lib/spotify';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

const API_PATH = '/api/spotify/now-playing';

const useNowPlaying = (options?: UseQueryOptions<PlaybackState>) => {
    const query = useQuery({
        queryKey: [API_PATH],
        queryFn: async () => {
            const response = await fetcher<PlaybackState>(API_PATH);

            return response;
        },
        ...options
    });

    return query;
};

export default useNowPlaying;
