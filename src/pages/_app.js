import '@/styles/global.css';

import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout';
import Head from '@/components/Head';

import NProgress from '@/components/Common/NProgress';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head title={Component.title} description={Component.description} />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <NProgress />
      </ThemeProvider>
    </>
  );
}
