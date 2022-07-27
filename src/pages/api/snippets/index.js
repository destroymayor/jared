import { getAllMdxFolder } from '@/helpers/mdx.helpers';

export default async function handler(req, res) {
  const snippets = await getAllMdxFolder('content/snippets');

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

  return res.status(200).json(snippets);
}
