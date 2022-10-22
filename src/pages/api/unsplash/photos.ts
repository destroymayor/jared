import type { NextApiRequest, NextApiResponse } from 'next';
import { getUnsplashPhotos } from '@/lib/unsplash';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getUnsplashPhotos();

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

  return res.status(response.status).json(response.data);
}
