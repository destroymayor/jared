import {
    fetchNowPlaying,
    fetchTopTracks,
} from '@/domain/repositories/spotify.repository';

export async function getNowPlaying() {
    return fetchNowPlaying();
}

export async function getTopTracks() {
    return fetchTopTracks();
}
