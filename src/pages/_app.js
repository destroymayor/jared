import '@/styles/global.css';

import { SWRConfig } from 'swr';
import fetcher from '@/lib/fetcher';

import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <SWRConfig value={{ fetcher }}>{getLayout(<Component {...pageProps} />)}</SWRConfig>
    </ThemeProvider>
  );
}
