import fetcher from '@/lib/fetcher';
import { useSuspenseQuery } from '@tanstack/react-query';
import { TrackType } from '@/lib/spotify';

const API_PATH = '/api/spotify/top-tracks';

const useTopTracks = () => {
    const query = useSuspenseQuery({
        queryKey: [API_PATH],
        queryFn: async () => {
            const response = await fetcher<Array<TrackType>>(API_PATH);

            return response;
        },
        refetchOnWindowFocus: false,
    });

    return query;
};

export default useTopTracks;
