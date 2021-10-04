import router from 'next/router';

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { mdxFilePaths } from '@/utils/mdxUtils';

import Head from '@/components/Head/Head';
import Title from '@/components/Title/Title';

const Snippets = (props) => {
  const { data } = props;

  const handleNavigation = (pathname) => router.push(pathname);

  return (
    <>
      <Head title="Snippets" description="Collection of useful snippets." />
      <Title title="Snippets" />

      <ul className="flex flex-col gap-y-6">
        {data.map((item) => {
          const { title, description, category, pathname } = item.data;
          return (
            <li
              key={title + category}
              aria-hidden
              className="flex flex-col gap-2 p-3 transition duration-200 ease-in-out bg-gray-900 border border-gray-300 rounded-md cursor-pointer bg-opacity-80 group hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700"
              onClick={() => handleNavigation(pathname)}
            >
              <h3 className="text-xl text-blue-500">{title}</h3>
              <p className="text-sm">{description}</p>
              <div className="">
                <span className="text-sm font-semibold tracking-wide">Category : </span>
                <span>{category}</span>
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
