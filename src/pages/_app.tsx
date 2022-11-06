import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Source_Code_Pro } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

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

const sourceCodeProFont = Source_Code_Pro();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sourceCodeProFont.style.fontFamily};
        }
      `}</style>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <SWRConfig value={{ fetcher }}>
          <ToastProvider>
            {
              //
              getLayout(<Component {...pageProps} />)
              //
            }
            <Analytics />
          </ToastProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
