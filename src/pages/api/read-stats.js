import { getReadStats } from '@/lib/wakatime';

export default async function handler(req, res) {
  const readStatsResponse = await getReadStats();

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

  return res.status(200).json(readStatsResponse.data);
}
