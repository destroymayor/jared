import { getCategoryFormatted } from '@/helpers/category.helper';
import { getALLMdxFile } from '@/helpers/mdx.helpers';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import FadeInScrollContainer from '@/components/FadeInScrollContainer';

const title = `Code Snippets`;
const description = `Collection of useful code snippets.`;

export default function Snippets(props) {
  const { snippets = [] } = props;

  const getCategories = [...new Set(snippets.map((item) => item.category))];
  const filterSnippets = getCategories.map((item) => ({
    category: item,
    snippets: snippets.filter((el) => el.category === item),
  }));

  return (
    <ul className="flex flex-col gap-10">
      {filterSnippets.map((item) => {
        const getCategory = getCategoryFormatted(item.category)?.label;

        return (
          <li className="relative flex flex-col gap-2" key={item.category}>
            <aside className="top-2 whitespace-nowrap text-lg text-zinc-400 dark:text-zinc-500 lg:absolute lg:-left-[60px] lg:text-base lg:[writing-mode:vertical-lr]">
              {getCategory}
            </aside>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {item.snippets.map((snippet) => {
                const { title, description, category, slug } = snippet;

                const languageIcon = getCategoryFormatted(category)?.icon;

                return (
                  <FadeInScrollContainer key={title + category}>
                    <Link href={`/snippets/${slug}`}>
                      <div className="flex h-full cursor-pointer gap-2 rounded-md border border-zinc-300 p-4 transition-all duration-150 ease-out hover:scale-[1.05] dark:border  dark:border-zinc-800 dark:bg-zinc-800">
                        <div className="flex flex-1 flex-col gap-2">
                          <h3 className="text-lg font-bold">{title}</h3>
                          <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
                        </div>
                        <div className="h-8 w-8 pt-2">{languageIcon}</div>
                      </div>
                    </Link>
                  </FadeInScrollContainer>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

Snippets.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />

      <div className="absolute -left-6 top-12 hidden h-full w-[1px] border-l border-dashed border-zinc-300 dark:border-zinc-700 lg:block" />

      {page}
    </Container>
  );
};

export async function getStaticProps() {
  const snippets = await getALLMdxFile('src/data/snippets');

  return { props: { snippets } };
}
