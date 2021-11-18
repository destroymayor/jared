import { getGithubUser } from '@/lib/github';

export default async function handler(req, res) {
  const response = await getGithubUser();

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

  return res.status(response.status).json(response.data);
}
