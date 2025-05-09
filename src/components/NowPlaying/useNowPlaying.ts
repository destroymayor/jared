import fetcher from '@/lib/fetcher';
import { PlaybackState } from '@/lib/spotify';
import { useQuery } from '@tanstack/react-query';

const API_PATH = '/api/spotify/now-playing';

const useNowPlaying = () => {
    const query = useQuery({
        queryKey: [API_PATH],
        queryFn: async () => {
            const response = await fetcher<PlaybackState>(API_PATH);

            return response;
        },
    });

    return query;
};

export default useNowPlaying;
