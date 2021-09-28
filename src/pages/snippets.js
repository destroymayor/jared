import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';

import Head from '@/components/Head/Head';
import Snippets from '@/components/Snippets/Snippets';

const SnippetsPage = (props) => {
  const { data } = props;

  return (
    <>
      <Head title="Snippets" />
      <Snippets data={data} />
    </>
  );
};

export function getStaticProps() {
  const data = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      slug: filePath.replace(/\.mdx?$/, ''),
    };
  });

  return { props: { data } };
}

export default SnippetsPage;
