import router from 'next/router';

import languageMapping from '@/helpers/language-mapping.helper';
import { getMdxFileList } from '@/helpers/mdx.helpers';

const title = `Code Snippets`;
const description = `Collection of useful code snippets.`;

Snippets.title = title;
Snippets.description = description;

export default function Snippets(props) {
  const { snippets = [] } = props;

  const handleNavigation = (pathname) => router.push(pathname);

  return (
    <>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="text-md py-4 dark:text-gray-400 sm:text-lg">{description}</p>

      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {snippets.map((item) => {
          const { title, description, category, pathname } = item;
          return (
            <li
              key={title + category}
              aria-hidden
              className="flex animate-fade-up cursor-pointer flex-col gap-2 rounded-md border border-gray-300 p-4 transition duration-150 ease-out hover:scale-[1.05] dark:border-gray-700"
              onClick={() => handleNavigation(pathname)}
            >
              <div className="flex items-center justify-between py-2">
                <h3 className="text-xl font-bold">{title}</h3>
                <span className="h-8 w-8">{languageMapping?.[category]?.icon}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const snippets = await getMdxFileList('src/data/snippets');

  return { props: { snippets } };
}
