import { Suspense } from 'react';
import MDXRemote, { COMPONENTS } from '@/helpers/mdx-components.helper';
import { getMDXSource } from '@/helpers/mdx.helpers';
import Loading from './loading';

export default async function Page() {
  const { mdxSource } = await getMDXSource({
    dirPath: `content`,
    slug: 'bookmarks',
  });

  return (
    <Suspense fallback={<Loading />}>
      <MDXRemote {...mdxSource} components={COMPONENTS} />
    </Suspense>
  );
}
