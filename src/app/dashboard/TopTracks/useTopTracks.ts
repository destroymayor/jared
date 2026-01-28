import fetcher from '@/lib/fetcher';
import { useQuery } from '@tanstack/react-query';
import { TrackType } from '@/lib/spotify';

const API_PATH = '/api/spotify/top-tracks';

export default function useTopTracks() {
    return useQuery({
        queryKey: [API_PATH],
        queryFn: () => fetcher<TrackType[]>(API_PATH),
        refetchOnWindowFocus: false,
    });
}
