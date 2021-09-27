import NextHead from 'next/head';

const Head = (props) => {
  const { title, description = '' } = props;

  return (
    <NextHead>
      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

      {/* Load font */}
      <style data-href="https://fonts.googleapis.com/css2?family=Montserrat">
        {`@font-face{font-family:"Montserrat"}`}
      </style>

      {/* Title */}
      <title>{`${title ? `${title} - ` : ''}Jared Chen`}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Jared Chen" />

      {/* URL */}
      <meta name="og:url" content="https://jared-chen.com" />

      {/* Favicons */}
      <link rel="shortcut icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
