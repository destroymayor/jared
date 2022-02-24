import { getMdxFileList } from '@/utils/mdx-utils';

export default async function handler(req, res) {
  const response = await getMdxFileList();

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');

  return res.status(200).json(response);
}
