import { TopTrackResponseType } from '@/lib/spotify/types';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function getAccessToken() {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresh_token ?? '',
        }),
    });

    return response.json();
}

export async function fetchNowPlaying() {
    const { access_token } = await getAccessToken();

    const request = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` },
    });

    const status = request.status;

    if (status === 204 || status > 400) {
        return { status, data: { isPlaying: false } };
    }

    const song = await request.json();

    if (!song.item) {
        return { status, data: { isPlaying: false } };
    }

    const { item } = song;

    return {
        status,
        data: {
            album: item.album?.name ?? '',
            albumImageUrl:
                item.album?.images?.find((image: { width: number }) => image.width === 64)
                    ?.url ?? '',
            artist:
                item.artists?.map((artist: { name: string }) => artist.name).join(', ') ??
                '',
            isPlaying: song.is_playing,
            songUrl: item.external_urls?.spotify ?? '',
            title: item.name ?? '',
        },
    };
}

export async function fetchTopTracks() {
    const { access_token } = await getAccessToken();

    const request = await fetch(`${TOP_TRACKS_ENDPOINT}?limit=10`, {
        headers: { Authorization: `Bearer ${access_token}` },
    });

    const status = request.status;

    if (status === 204 || status > 400) {
        return { status, data: [] };
    }

    const getData = await request.json();

    const tracks = getData.items.map((track: TopTrackResponseType) => ({
        album: {
            name: track.album.name,
            image: track.album.images.find((image) => image.width === 64),
        },
        artist: track.artists.map((artist) => artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
    }));

    return { status, data: tracks };
}
