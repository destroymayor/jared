import '@/styles/global.css';

import useGoogleAnalytics from '@/hooks/use-google-analytics.hook';

import { ThemeProvider } from 'next-themes';
import Head from '@/components/Head';

import NProgress from '@/components/Common/NProgress';

export default function App({ Component, pageProps }) {
  useGoogleAnalytics();

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head title={Component.title} description={Component.description} />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <NProgress />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
