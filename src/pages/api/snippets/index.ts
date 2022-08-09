import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllMdxFolder } from '@/helpers/mdx.helpers';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const snippets = await getAllMdxFolder('content/snippets');

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

  return res.status(200).json(snippets);
}
