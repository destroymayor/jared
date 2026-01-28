import fetcher from '@/lib/fetcher';
import { useQuery } from '@tanstack/react-query';
import { NowPlayingType } from '@/lib/spotify';

const API_PATH = '/api/spotify/now-playing';

export default function useNowPlaying() {
    return useQuery({
        queryKey: [API_PATH],
        queryFn: () => fetcher<NowPlayingType>(API_PATH),
    });
}
