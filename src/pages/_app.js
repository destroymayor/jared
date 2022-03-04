import Router from 'next/router';
import '@/styles/global.css';

import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout';
import Head from '@/components/Head';

import NProgress from '@/components/Common/NProgress';

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0);
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head title={Component.title} description={Component.description} />
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <NProgress />
      </ThemeProvider>
    </>
  );
}
