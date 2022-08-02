import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Giscus from '@/components/Giscus';

const title = `Guestbook`;
const description = `Login your GitHub account to leave a message.`;

export default function Guestbook() {
  return <Giscus />;
}

Guestbook.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />
      {page}
    </Container>
  );
};
