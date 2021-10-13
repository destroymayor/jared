import Router from 'next/router';
import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout/Layout';

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0);
});

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider disableTransitionOnChange attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default MyApp;
