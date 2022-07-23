import PropTypes from 'prop-types';
import Head from 'next/head';

export default function SEO(props) {
  const { title, description = `Jared Chen, a Front-end Developer.` } = props;

  const metaTitle = `${title ? `${title} - ` : ''}Jared`;

  return (
    <Head>
      {/* Title */}
      <title>{metaTitle}</title>
      <meta name="og:title" content={metaTitle} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="apple-mobile-web-app-title" content="Jared" />
      <meta name="author" content="Jared" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jared Chen" />

      {/* URL */}
      <meta name="og:url" content="https://jared-chen.me" />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
