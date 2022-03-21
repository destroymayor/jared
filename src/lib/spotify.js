import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
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
    return { status, isPlaying: false, data: {} };
  }

  const song = await request?.json();

  if (!song.item) {
    return { status, isPlaying: false, data: {} };
  }

  const isPlaying = song?.is_playing;
  const title = song?.item?.name ?? '';
  const artist = song?.item?.artists.map((_artist) => _artist.name).join(', ') ?? '';
  const album = song?.item?.album?.name ?? '';
  const albumImageUrl =
    song?.item?.album?.images?.filter((image) => image.width === 64)?.[0]?.url ?? '';
  const songUrl = song?.item?.external_urls?.spotify ?? '';

  return {
    status,
    data: {
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    },
  };
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  const request = await fetch(`${TOP_TRACKS_ENDPOINT}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const status = request.status;

  if (status === 204 || status > 400) {
    return { status, tracks: [] };
  }

  const getData = await request?.json();

  const tracks = getData?.items?.slice(0, 10)?.map((track) => ({
    album: {
      name: track?.album?.name,
      image: track?.album?.images.filter((image) => image.width === 64)?.[0],
    },
    artist: track?.artists?.map((_artist) => _artist.name).join(', '),
    songUrl: track?.external_urls?.spotify,
    title: track?.name,
  }));

  return { status, data: tracks };
};
