import languageMapping from '@/helpers/language-mapping.helper';
import { getALLMdxFile } from '@/helpers/mdx.helpers';

import MainLayout from '@/layouts/main-layout';
import Link from '@/components/Common/Link';
import FadeInScrollContainer from '@/components/Common/FadeInScrollContainer';

const title = `Code Snippets`;
const description = `Collection of useful code snippets.`;

Snippets.title = title;
Snippets.description = description;

export default function Snippets(props) {
  const { snippets = [] } = props;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {snippets.map((snippet) => {
        const { title, description, category, slug } = snippet;

        const languageIcon = languageMapping?.[category]?.icon;

        return (
          <FadeInScrollContainer key={title + category}>
            <Link href={`/snippets/${slug}`}>
              <div className="flex h-full cursor-pointer flex-col gap-2 rounded-md border border-zinc-300 p-4 transition-all duration-150 ease-out hover:scale-[1.05] dark:border-zinc-700">
                <div className="flex items-center justify-between py-2">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <span className="h-8 w-8">{languageIcon}</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
              </div>
            </Link>
          </FadeInScrollContainer>
        );
      })}
    </div>
  );
}

Snippets.getLayout = function getLayout(page) {
  return (
    <MainLayout title={title} description={description}>
      {page}
    </MainLayout>
  );
};

export async function getStaticProps() {
  const snippets = await getALLMdxFile('src/data/snippets');

  return { props: { snippets } };
}
