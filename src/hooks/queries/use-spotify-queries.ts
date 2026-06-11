import fetcher from '@/lib/fetcher';
import { useQuery } from '@/lib/react-query';
import { queryKeys } from '@/lib/react-query';
import type { NowPlayingType, TrackType } from '@/lib/spotify/types';

export function useNowPlaying() {
    return useQuery({
        queryKey: queryKeys.spotify.nowPlaying,
        queryFn: () => fetcher<NowPlayingType>(queryKeys.spotify.nowPlaying[0]),
    });
}

export function useTopTracks() {
    return useQuery({
        queryKey: queryKeys.spotify.topTracks,
        queryFn: () => fetcher<TrackType[]>(queryKeys.spotify.topTracks[0]),
        refetchOnWindowFocus: false,
    });
}
