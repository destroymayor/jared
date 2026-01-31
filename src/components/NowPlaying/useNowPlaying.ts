import { httpClient } from '@/lib/http-client';
import { useQuery } from '@/lib/react-query';
import { queryKeys } from '@/lib/react-query';
import type { NowPlayingType } from '@/lib/spotify/types';

export default function useNowPlaying() {
    return useQuery({
        queryKey: queryKeys.spotify.nowPlaying,
        queryFn: () => httpClient<NowPlayingType>(queryKeys.spotify.nowPlaying[0]),
    });
}
