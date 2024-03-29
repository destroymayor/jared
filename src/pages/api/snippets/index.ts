import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllMDXFolder } from '@/helpers/mdx.helpers';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const snippets = await getAllMDXFolder('content/snippet');

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

  return res.status(200).json(snippets);
}
