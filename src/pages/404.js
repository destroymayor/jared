import Container from '@/components/Container';
import { FrownIcon } from '@/components/FeatherIcons';

Custom404.title = 'Page not found';

export default function Custom404() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-10">
      <FrownIcon className="h-20 w-20" />
      <p className="text-lg">This page cannot be found.</p>
    </div>
  );
}

Custom404.getLayout = function getLayout(page) {
  return <Container>{page}</Container>;
};
