import { getReadStats } from '@/lib/wakatime';

export default async function handler(req, res) {
  const readStatsResponse = await getReadStats();

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

  return res.status(200).json(readStatsResponse.data);
}
