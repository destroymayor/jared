import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout/Layout';
import GA4 from '@/components/Common/GA4';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider disableTransitionOnChange attribute="class">
    <Layout>
      <Component {...pageProps} />

      <GA4 />
    </Layout>
  </ThemeProvider>
);

export default MyApp;
