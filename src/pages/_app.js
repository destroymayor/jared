import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout/Layout';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default MyApp;
