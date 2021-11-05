import { getReadStats } from '@/lib/wakatime';

export default async function handler(req, res) {
  const response = await getReadStats();

  if (response.status > 400) {
    return res.status(200).json({ error: 'No data found' });
  }

  const getReadStatsData = await response.json();
  const filterReadStatsData = getReadStatsData?.data?.languages.filter(
    (item) => item.minutes > 0 || item.hours > 0
  );

  return res.status(200).json(filterReadStatsData);
}
