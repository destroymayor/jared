import './global.css';

import { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { TanstackProvider, ThemeProvider } from '@/app/providers';
import Layout from '@/components/Layout';

const sourceCodeProFont = localFont({
    src: '../../public/fonts/source-code-pro.ttf',
    display: 'swap',
});

const SITE_URL = 'https://jared-chen.me';
const SITE_DESCRIPTION = `I'm Jared Chen, a Front-end Developer working with React and Next.js who enjoys building great quality and great user experience products.`;

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Jared Chen',
        template: '%s | Jared Chen',
    },
    description: SITE_DESCRIPTION,
    generator: 'Next.js',
    authors: [{ name: 'Jared Chen' }],
    keywords: ['Next.js', 'React', 'JavaScript'],
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        type: 'website',
        title: 'Jared Chen',
        description: SITE_DESCRIPTION,
        siteName: 'Jared Chen',
        url: SITE_URL,
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Jared Chen - Front-End Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jared Chen',
        description: SITE_DESCRIPTION,
        images: ['/og-image.png'],
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
            {
                url: '/favicons/apple-icon-114x114.png',
                sizes: '114x114',
                type: 'image/png',
            },
            {
                url: '/favicons/apple-icon-120x120.png',
                sizes: '120x120',
                type: 'image/png',
            },
            {
                url: '/favicons/apple-icon-144x144.png',
                sizes: '144x144',
                type: 'image/png',
            },
            {
                url: '/favicons/apple-icon-152x152.png',
                sizes: '152x152',
                type: 'image/png',
            },
            {
                url: '/favicons/apple-icon-180x180.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        other: [
            {
                url: '/favicons/android-icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
            { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        ],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <main className={sourceCodeProFont.className}>
                    <TanstackProvider>
                        <ThemeProvider>
                            <Layout>{children}</Layout>
                        </ThemeProvider>
                    </TanstackProvider>
                    <SpeedInsights />
                    <Analytics />
                </main>
            </body>
        </html>
    );
}
