import router from 'next/router';

import languageMapping from '@/helpers/language-mapping.helper';
import { getMdxFileList } from '@/helpers/mdx.helpers';

import FadeInScrollContainer from '@/components/Common/FadeInScrollContainer';

const title = `Code Snippets`;
const description = `Collection of useful code snippets.`;

Snippets.title = title;
Snippets.description = description;

export default function Snippets(props) {
  const { snippets = [] } = props;

  const handleNavigation = (pathname) => router.push(pathname);

  return (
    <>
      <h1 className="text-2xl sm:text-3xl">{title}</h1>
      <p className="mb-6 border-b border-dashed border-zinc-600 pt-2 pb-6 dark:text-zinc-400">
        {description}
      </p>

      <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
        {snippets.map((item) => {
          const { title, description, category, pathname } = item;

          return (
            <FadeInScrollContainer
              key={title + category}
              onClick={() => handleNavigation(pathname)}
            >
              <div className="flex h-full cursor-pointer flex-col gap-2 rounded-md border border-zinc-300 p-4 transition-all duration-150 ease-out hover:scale-[1.05] dark:border-zinc-700">
                <div className="flex items-center justify-between py-2">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <span className="h-8 w-8">{languageMapping?.[category]?.icon}</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
              </div>
            </FadeInScrollContainer>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const snippets = await getMdxFileList('src/data/snippets');

  return { props: { snippets } };
}
