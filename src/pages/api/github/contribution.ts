import type { NextApiRequest, NextApiResponse } from 'next';
import { getGithubUserContribution } from '@/lib/github';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getGithubUserContribution();

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

  return res.status(response.status).json(response.data);
}
