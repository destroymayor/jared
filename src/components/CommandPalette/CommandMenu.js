import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import Tabs from '@/components/Tabs';

export default function CommandMenu(props) {
  const { options, onSelect } = props;

  const handleSelect = (option) => onSelect(option);

  const getFlatOptionsLength = options.map((item) => item.children).flat(1).length;

  const getTitleHeight = options.filter((item) => item.children.length > 0).length * 32;
  const getMenuHeight = getFlatOptionsLength * 40;
  const getMenuContainerHeight = getTitleHeight + getMenuHeight;

  if (getFlatOptionsLength === 0) {
    return <p className="p-4 text-sm text-zinc-500">No results found.</p>;
  }

  return (
    <motion.div
      className="overflow-y-auto transition-[height] duration-100 will-change-[height] [transition-timing-function:ease]"
      style={{ height: getMenuContainerHeight < 340 ? getMenuContainerHeight : 340 }}
    >
      <Tabs direction="vertical">
        {options.map((option) => (
          <Fragment key={option.title}>
            {option.children.length > 0 && (
              <>
                <span className="relative p-2 text-xs text-zinc-400">{option.title}</span>
                {option.children.map((child) => (
                  <Tabs.Tab key={child.title} value={child}>
                    <button
                      className="flex w-full items-center gap-3 p-2 text-zinc-600 transition-colors duration-200 ease-in-out hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-white"
                      onClick={() => handleSelect(child)}
                    >
                      <span className="h-5 w-5">{child.icon}</span>
                      <span>{child.title}</span>
                    </button>
                  </Tabs.Tab>
                ))}
              </>
            )}
          </Fragment>
        ))}
      </Tabs>
    </motion.div>
  );
}

CommandMenu.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
};
