import Head from '@/components/Head/Head';
import Quotes from '@/components/Quotes/Quotes';

const QuotesPage = () => {
  return (
    <>
      <Head title="Quotes" description="Collection of notable quotes." />
      <Quotes />
    </>
  );
};

export default QuotesPage;
