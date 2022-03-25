import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
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

        <body className="bg-gray-50 dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
