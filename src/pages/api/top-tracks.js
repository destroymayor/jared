import { getTopTracks } from '@/lib/spotify';

export default async function handler(req, res) {
  const response = await getTopTracks();

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');

  return res.status(200).json(response.data);
}
