import Router from 'next/router';
import '@/styles/global.css';

import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout/Layout';
import Head from '@/components/Head/Head';

import NProgress from '@/components/Common/NProgress';

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0);
});

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider disableTransitionOnChange attribute="class">
      <Head title={Component.title} description={Component.description} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <NProgress />
    </ThemeProvider>
  );
};

export default App;
