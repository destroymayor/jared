import { getALLMdxFile } from '@/helpers/mdx.helpers';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import FadeInScrollContainer from '@/components/FadeInScrollContainer';

const title = `Blog`;
const description = `Write something here.`;

export default function Blog(props) {
  const { posts = [] } = props;

  if (posts.length === 0) return <div>{`I'm lazy... :)`}</div>;

  return (
    <ul className="flex flex-col gap-10">
      {posts.map((post) => {
        const { title, description, slug } = post;
        return (
          <FadeInScrollContainer key={title}>
            <Link href={`/blog/${slug}`}>
              <div className="group flex h-full cursor-pointer gap-2 rounded-md bg-zinc-100 p-4 shadow-md transition-all duration-150 ease-out hover:scale-[1.05] dark:bg-zinc-900">
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-lg font-bold group-hover:text-sky-500">{title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
                </div>
              </div>
            </Link>
          </FadeInScrollContainer>
        );
      })}
    </ul>
  );
}

Blog.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />

      <div className="absolute -left-6 top-12 hidden h-full w-[1px] border-l border-dashed border-zinc-300 dark:border-zinc-700 lg:block" />

      {page}
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getALLMdxFile('src/data/blog');

  return { props: { posts } };
}
