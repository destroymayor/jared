import { getReadStats, getALLTimeSinceToday } from '@/lib/wakatime';

export default async function handler(req, res) {
  const readStatsResponse = await getReadStats();
  const allTimeSinceTodayResponse = await getALLTimeSinceToday();

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

  const data = {
    ...readStatsResponse.data,
    all_time_since_today: allTimeSinceTodayResponse.data,
  };

  return res.status(200).json(data);
}
