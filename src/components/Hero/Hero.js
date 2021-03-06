import PropTypes from 'prop-types';

export default function Hero(props) {
  const { title, description } = props;

  return (
    <div className="pt-2 md:pt-12">
      <h1 className="bg-gradient-to-r from-sky-600 to-green-600 bg-clip-text py-2 text-5xl font-extrabold text-transparent">
        {title}
      </h1>
      <p className="pt-2 dark:text-zinc-400">{description}</p>
      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
