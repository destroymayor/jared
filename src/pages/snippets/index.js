import { getCategoryFormatted } from '@/helpers/category.helper';
import { getALLMdxFile } from '@/helpers/mdx.helpers';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import FadeInScrollContainer from '@/components/FadeInScrollContainer';

const title = `Snippets`;
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
            <div className="bg-gradient-to-r from-sky-600 to-green-600 bg-clip-text py-2 text-xl font-extrabold text-transparent">
              {getCategory}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {item.snippets.map((snippet) => {
                const { title, description, category, slug, date } = snippet;

                const languageIcon = getCategoryFormatted(category)?.icon;
                const formatDate = new Intl.DateTimeFormat('en', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })?.format(new Date(date));

                return (
                  <FadeInScrollContainer key={title + category}>
                    <Link href={`/snippets/${slug}`}>
                      <div className="flex h-full cursor-pointer gap-6 rounded-md border border-zinc-100 bg-zinc-100 p-4 shadow-md transition-all duration-150 ease-out dark:border-zinc-900 dark:bg-zinc-900 md:hover:scale-[1.05] md:dark:hover:border-zinc-600">
                        <div className="flex flex-1 flex-col justify-between gap-6">
                          <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold">{title}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                              {description}
                            </p>
                          </div>
                          <span className="text-sm italic tracking-tighter text-zinc-500">
                            <span className="pr-2">Last Updated:</span>
                            {formatDate}
                          </span>
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
      {page}
    </Container>
  );
};

export async function getStaticProps() {
  const snippets = await getALLMdxFile('src/data/snippets');

  return { props: { snippets } };
}
