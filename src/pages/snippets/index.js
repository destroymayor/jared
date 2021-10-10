import router from 'next/router';

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { mdxFilePaths } from '@/utils/mdxUtils';

import Head from '@/components/Head/Head';
import Title from '@/components/Title/Title';

import { JavaScripIcon, ReactIcon } from '@/components/Common/Icons';

const Snippets = (props) => {
  const { data } = props;

  const handleNavigation = (pathname) => router.push(pathname);

  const iconMap = {
    javascript: <JavaScripIcon className="w-8 h-8 rounded-full" />,
    'react-hooks': <ReactIcon className="w-8 h-8 rounded-full" />,
    'react-components': <ReactIcon className="w-8 h-8 rounded-full" />,
  };

  return (
    <>
      <Head title="Snippets" description="Collection of useful snippets." />
      <Title title="Snippets" />

      <ul className="grid flex-col grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((item) => {
          const { title, category, pathname } = item.data;
          return (
            <li
              key={title + category}
              aria-hidden
              className="flex flex-col gap-2 p-4 ease-out bg-gray-200 border border-gray-300 rounded-md cursor-pointer bg-opacity-80 dark:bg-gray-900 dark:border-gray-700 "
              onClick={() => handleNavigation(pathname)}
            >
              <span>{iconMap?.[category]}</span>
              <h3 className="text-xl text-blue-500">{title}</h3>
              <div className="">
                <span className="text-sm font-semibold tracking-wide">Category: </span>
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
