import './global.css';

import { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

import ThemeProvider from '@/lib/ThemeProvider';
import Layout from '@/components/Layout';

const sourceCodeProFont = localFont({
  src: '../../public/fonts/source-code-pro.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jared Chen',
    template: '%s | Jared Chen',
  },
  description: 'Jared Chen, a Front-end Developer.',
  generator: 'Next.js',
  authors: [{ name: 'Jared Chen' }],
  keywords: ['Next.js', 'React', 'JavaScript'],
  openGraph: {
    type: 'website',
    title: 'Jared Chen',
    description: 'Jared Chen, a Front-end Developer.',
    siteName: 'Jared Chen',
    url: 'https://jared-chen.me',
  },
  manifest: '/favicons/manifest.json',
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon.ico',
    apple: [
      { url: '/favicons/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/favicons/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/favicons/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicons/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/favicons/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/favicons/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicons/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicons/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicons/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicons/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main className={sourceCodeProFont.className}>
          <ThemeProvider>
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
