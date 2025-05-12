import { Page, PlaybackState, Track } from './types';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const body: { grant_type: string; refresh_token?: string } = {
        grant_type: 'refresh_token',
        refresh_token,
    };

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(body),
    });

    return response.json();
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    const request = await fetch(NOW_PLAYING_ENDPOINT, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const status = request.status;

    if (status === 204 || status > 400) {
        return {
            status,
            data: {
                is_playing: false,
                item: {
                    name: null,
                    external_urls: {
                        spotify: '#',
                    },
                    artists: [],
                    album: {
                        name: '',
                        images: [],
                    },
                },
            },
        };
    }

    const data = await request?.json() as PlaybackState;

    return {
        status,
        data: {
            item: {
                name: data.item?.name,
                external_urls: {
                    spotify: data.item?.external_urls?.spotify,
                },
                artists: data.item?.artists,
                album: {
                    name: data.item?.album?.name,
                    images: data.item?.album?.images,
                },
            },
            // only show is_playing if the currently_playing_type is track
            is_playing: data.currently_playing_type === 'track' ? data.is_playing : false,
        },
    };
};

export const getTopTracks = async () => {
    const { access_token } = await getAccessToken();

    const request = await fetch(`${TOP_TRACKS_ENDPOINT}?limit=10`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const status = request.status;

    if (status === 204 || status > 400) {
        return { status, tracks: [] };
    }

    const getData = await request?.json() as Page<Track>;

    const tracks = getData.items.map((track) => ({
        album: {
            name: track.album.name,
            image: track.album.images.find((image) => image.width === 64),
        },
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
    }));

    return { status, data: tracks };
};
