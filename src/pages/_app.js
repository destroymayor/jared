import Router from 'next/router';
import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout/Layout';

import NProgress from '@/components/Common/NProgress';

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0);
});

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider disableTransitionOnChange attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <NProgress />
  </ThemeProvider>
);

export default MyApp;
