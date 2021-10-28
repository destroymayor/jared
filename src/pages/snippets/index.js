import router from 'next/router';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import Head from '@/components/Head/Head';

import languageMapping from '@/utils/language-mapping';
import { mdxFilePaths } from '@/utils/mdx-utils';

const Snippets = (props) => {
  const { data } = props;

  const handleNavigation = (pathname) => router.push(pathname);

  const title = `Code Snippets`;
  const description = `Collection of useful code snippets.`;

  return (
    <>
      <Head title={title} description={description} />
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="py-4 text-md sm:text-lg dark:text-gray-400">{description}</p>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((item) => {
          const { title, description, category, pathname } = item.data;
          return (
            <li
              key={title + category}
              aria-hidden
              className="flex flex-col gap-2 p-4 ease-out border border-gray-300 rounded-md cursor-pointer dark:border-gray-700 transition duration-150 hover:scale-[1.05]"
              onClick={() => handleNavigation(pathname)}
            >
              <span>{languageMapping?.[category]?.icon}</span>
              <h3 className="text-xl font-bold">{title}</h3>
              <div className="text-gray-600 dark:text-gray-400">
                <span>{description}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const MDX_FILE_PATH = path.join(process.cwd(), 'src/data/snippets');
export function getStaticProps() {
  const data = mdxFilePaths(MDX_FILE_PATH).map((filePath) => {
    const source = fs.readFileSync(path.join(MDX_FILE_PATH, filePath));
    const { data } = matter(source);

    return {
      data,
    };
  });

  return { props: { data } };
}

export default Snippets;
