import { getWakaTimeCurrentStats } from '@/lib/wakatime';

export default async function handler(req, res) {
  const response = await getWakaTimeCurrentStats();

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

  return res.status(response.status).json(response.data);
}
