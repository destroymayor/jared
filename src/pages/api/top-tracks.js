import { getTopTracks } from '@/lib/spotify';

export default async function handler(req, res) {
  const response = await getTopTracks();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ tracks: [] });
  }

  const { items } = await response.json();

  const tracks = items.slice(0, 10).map(({ track }) => ({
    album: track?.album?.images.filter((image) => image.width === 64)?.[0],
    artist: track?.artists?.map((_artist) => _artist.name).join(', '),
    songUrl: track?.external_urls?.spotify,
    title: track?.name,
  }));

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');

  return res.status(200).json({ tracks });
}
