import Container from '@/components/Container';
import Hero from '@/components/Hero';

const title = `Blog`;
const description = `Write something here.`;

export default function Snippets(props) {
  const { blogs = [] } = props;

  return <div className="">{`I'm lazy... :)`}</div>;
}

Snippets.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />

      {/* <div className="absolute -left-6 top-12 hidden h-full w-[1px] border-l border-dashed border-zinc-300 dark:border-zinc-700 lg:block" /> */}

      {page}
    </Container>
  );
};
