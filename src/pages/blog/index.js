import { getAllMdxFolder } from '@/helpers/mdx.helpers';

import Container from '@/components/Container';
import Hero from '@/components/Hero';

const title = `Blog`;
const description = `Write something here.`;

export default function Blog(props) {
  const { posts = [] } = props;

  if (posts.length === 0) {
    return <div>{`I'm little lazy...`}</div>;
  }

  return <ul className="flex flex-col gap-10">{}</ul>;
}

Blog.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />
      {page}
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getAllMdxFolder('content/posts');

  return { props: { posts } };
}
