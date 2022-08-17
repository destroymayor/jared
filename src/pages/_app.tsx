import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '@/styles/global.css';

import { SWRConfig } from 'swr';
import fetcher from '@/lib/fetcher';

import { ThemeProvider } from 'next-themes';
import { ToastProvider } from '@/components/Toast';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <SWRConfig value={{ fetcher }}>
        <ToastProvider>
          {
            //
            getLayout(<Component {...pageProps} />)
            //
          }
        </ToastProvider>
      </SWRConfig>
    </ThemeProvider>
  );
}
