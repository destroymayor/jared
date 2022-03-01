import { useState } from 'react';
import router from 'next/router';

import Select from '@/components/Common/Select';

import languageMapping from '@/utils/language-mapping';
import { getMdxFileList } from '@/utils/mdx-utils';

const title = `Code Snippets`;
const description = `Collection of useful code snippets.`;

Snippets.title = title;
Snippets.description = description;

export default function Snippets(props) {
  const { data = [] } = props;
  const [selected, setSelected] = useState(undefined);

  const handleNavigation = (pathname) => router.push(pathname);

  const getCategories = ['All', ...new Set(data?.map((item) => item?.techStack)?.flat(1))];

  const filteredData = data?.filter((item) => selected?.includes(item?.techStack));
  const getSnippets = filteredData?.length === 0 ? data : filteredData;

  return (
    <>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="text-md py-4 dark:text-gray-400 sm:text-lg">{description}</p>

      <div className="mb-6">
        <Select
          className="w-5/12"
          options={getCategories}
          value={selected ?? 'Categories'}
          onChange={(value) => setSelected(value)}
          renderItem={({ option }) => <span className="pl-2">{option}</span>}
        />
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {getSnippets.map((item) => {
          const { title, description, category, pathname } = item;
          return (
            <li
              key={title + category}
              aria-hidden
              className="flex cursor-pointer flex-col gap-2 rounded-md border border-gray-300 p-4 transition duration-150 ease-out hover:scale-[1.05] dark:border-gray-700"
              onClick={() => handleNavigation(pathname)}
            >
              <span className="h-8 w-8">{languageMapping?.[category]?.icon}</span>
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
}

export async function getStaticProps() {
  const data = await getMdxFileList('src/data/snippets');

  return { props: { data } };
}
