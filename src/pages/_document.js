import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/source-code-pro.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>

      <body className="transition duration-200 ease-in-out bg-gray-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
