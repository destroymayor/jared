import Head from 'next/head';

export default function SEO(props) {
  const { title, description = `Hey, I'm Jared, a Front-end Developer.` } = props;

  return (
    <Head>
      {/* Title */}
      <title>{`${title ? `${title} - ` : ''}Jared`}</title>
      <meta name="og:title" content={`${title ? `${title} - ` : ''}Jared`} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="Jared" />
      <meta name="author" content="Jared" />
      <meta property="og:type" content="website" />

      {/* URL */}
      <meta name="og:url" content="https://jared-chen.me" />
    </Head>
  );
}
