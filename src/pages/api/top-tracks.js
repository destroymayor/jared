import { getTopTracks } from '@/lib/spotify';

export default async function handler(req, res) {
  const response = await getTopTracks();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ tracks: [] });
  }
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((item) => ({
    artist: item?.track?.artists?.map((_artist) => _artist.name).join(', '),
    songUrl: item?.track?.external_urls?.spotify,
    title: item?.track?.name,
  }));

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');

  return res.status(200).json({ tracks });
}
