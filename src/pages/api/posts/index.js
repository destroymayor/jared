import { getAllMdxFolder } from '@/helpers/mdx.helpers';

export default async function handler(req, res) {
  const posts = await getAllMdxFolder('content/posts');

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

  return res.status(200).json(posts);
}
