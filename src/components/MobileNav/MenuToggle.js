import { XIcon, MenuIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import styles from '@/styles/mobile-menu.module.css';

export default function MenuToggle(props) {
  const { open, onClick } = props;

  return (
    <button
      className={clsx(
        styles['menu-button'],
        'visible relative h-8 w-8 border-0 bg-transparent transition-opacity duration-300 ease-in md:hidden'
      )}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <MenuIcon data-hide={open} className="h-4 w-4" />
      <XIcon data-hide={!open} className="h-4 w-4" />
    </button>
  );
}
