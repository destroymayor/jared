import PropTypes from 'prop-types';

import { XIcon, MenuIcon } from '@/components/Icons';

export default function MenuToggle(props) {
  const { open, onClick } = props;

  return (
    <button
      className="visible relative z-[9999] border-0 bg-transparent transition-opacity duration-300 ease-in md:hidden"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {open ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
    </button>
  );
}

MenuToggle.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};
