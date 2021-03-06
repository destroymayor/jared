import PropTypes from 'prop-types';

export default function Button(props) {
  const { children } = props;

  return (
    <button
      {...props}
      className="flex h-10 w-10 items-center justify-center rounded-lg ring-zinc-400 transition duration-200 ease-in-out hover:ring-2 focus:outline-none dark:hover:ring-zinc-600"
      type="button"
      aria-label="Command palette"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
