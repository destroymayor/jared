import { defineEndpoint } from './core/define-endpoint';
import type { IntegrationDeps } from './core/types';
import type {
    NowPlayingType,
    TopTrackResponseType,
    TrackType,
} from '@/lib/spotify/types';

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';

const NOT_PLAYING: NowPlayingType = {
    isPlaying: false,
    songUrl: '',
    title: '',
    artist: '',
    album: '',
    albumImageUrl: '',
};

async function getAccessToken({ fetch, env }: IntegrationDeps): Promise<string> {
    const basic = Buffer.from(
        `${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`
    ).toString('base64');

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: env.SPOTIFY_REFRESH_TOKEN ?? '',
        }),
    });

    const { access_token } = await response.json();

    return access_token;
}

type RawNowPlaying = {
    is_playing: boolean;
    item?: {
        name?: string;
        album?: { name?: string; images?: Array<{ width: number; url: string }> };
        artists?: Array<{ name: string }>;
        external_urls?: { spotify: string };
    };
};

export const spotifyNowPlaying = defineEndpoint<RawNowPlaying, NowPlayingType>({
    request: async (deps) => {
        const token = await getAccessToken(deps);

        return deps.fetch(NOW_PLAYING_ENDPOINT, {
            headers: { Authorization: `Bearer ${token}` },
        });
    },
    transform: (song) => {
        const item = song.item;

        if (!item) return NOT_PLAYING;

        return {
            isPlaying: song.is_playing,
            title: item.name ?? '',
            album: item.album?.name ?? '',
            albumImageUrl:
                item.album?.images?.find((image) => image.width === 64)?.url ?? '',
            artist: item.artists?.map((artist) => artist.name).join(', ') ?? '',
            songUrl: item.external_urls?.spotify ?? '',
        };
    },
    fallback: NOT_PLAYING,
});

type RawTopTracks = { items: TopTrackResponseType[] };

export const spotifyTopTracks = defineEndpoint<RawTopTracks, TrackType[]>({
    request: async (deps) => {
        const token = await getAccessToken(deps);

        return deps.fetch(`${TOP_TRACKS_ENDPOINT}?limit=10`, {
            headers: { Authorization: `Bearer ${token}` },
        });
    },
    transform: (raw) =>
        raw.items.map((track) => ({
            title: track.name,
            artist: track.artists.map((artist) => artist.name).join(', '),
            songUrl: track.external_urls.spotify,
            album: {
                name: track.album.name,
                image: {
                    url:
                        track.album.images.find((image) => image.width === 64)?.url ?? '',
                },
            },
        })),
    fallback: [],
});
