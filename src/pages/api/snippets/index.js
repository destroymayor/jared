import { getAllMdxFolder } from '@/helpers/mdx.helpers';

export default async function handler(req, res) {
  const snippets = await getAllMdxFolder('content/snippets');

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

  return res.status(200).json(snippets);
}
