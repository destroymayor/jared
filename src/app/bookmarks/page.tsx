import MDXRemote, { COMPONENTS } from '@/helpers/mdx-components.helper';
import { getMDXSource } from '@/helpers/mdx.helpers';

export default async function Page() {
  const { mdxSource } = await getMDXSource({
    dirPath: `content`,
    slug: 'bookmarks',
  });

  return <MDXRemote {...mdxSource} components={COMPONENTS} />;
}
