import '@/styles/global.css';

import useGoogleAnalytics from '@/hooks/use-google-analytics.hook';

import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  useGoogleAnalytics();

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
