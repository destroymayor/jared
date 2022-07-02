import { useCallback, Fragment } from 'react';
import { motion } from 'framer-motion';

import Tabs from '@/components/Tabs';

export default function CommandMenu(props) {
  const { options, onSelect } = props;

  const handleSelect = useCallback((option) => onSelect(option), []);

  const getTitleHeight = options.filter((item) => item.children.length > 0).length * 32;
  const getMenuHeight = options.map((item) => item.children).flat(1).length * 40;
  const getMenuContainerHeight = getTitleHeight + getMenuHeight;

  return (
    <motion.div
      className="overflow-y-auto transition-[height] duration-100 will-change-[height] [transition-timing-function:ease]"
      style={{ height: getMenuContainerHeight < 340 ? getMenuContainerHeight : 340 }}
    >
      {options.map((option) => (
        <Fragment key={option.title}>
          {option.children.length !== 0 && (
            <>
              <div className="p-2 text-xs text-zinc-400">{option.title}</div>
              <Tabs direction="vertical">
                {option.children.map((child) => (
                  <button
                    key={child.title}
                    className="flex w-full items-center gap-3 p-2 text-zinc-600 transition-colors duration-200 ease-in-out hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-white"
                    onClick={() => handleSelect(child)}
                  >
                    <span className="h-5 w-5">{child.icon}</span>
                    <span>{child.title}</span>
                  </button>
                ))}
              </Tabs>
            </>
          )}
        </Fragment>
      ))}
    </motion.div>
  );
}
