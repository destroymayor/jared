import Head from 'next/head';

export default function NextHead(props) {
  const { title, description = "Hey, I'm Jared Chen. I'm a front-end developer." } = props;

  return (
    <Head>
      {/* Title */}
      <title>{`${title ? `${title} - ` : ''}Jared Chen`}</title>
      <meta name="og:title" content={`${title ? `${title} - ` : ''}Jared Chen`} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="Jared" />
      <meta name="author" content="Jared Chen" />

      {/* URL */}
      <meta name="og:url" content="https://jared-chen.me" />

      {/* Favicons */}
      <link rel="manifest" href="/favicons/manifest.json" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </Head>
  );
}